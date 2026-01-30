document.addEventListener('DOMContentLoaded', () => {
    // --- Existing Exit-Intent Popup Logic ---
    const popup = document.getElementById('exit-intent-popup');
    const closeBtn = document.querySelector('.close-btn');
    let popupShown = false;

    const showPopup = () => {
        if (!popupShown) {
            popup.style.display = 'flex';
            popupShown = true;
        }
    };

    const hidePopup = () => {
        popup.style.display = 'none';
    };

    document.addEventListener('mouseout', (e) => {
        if (e.clientY <= 0) {
            showPopup();
        }
    });

    if(closeBtn) {
        closeBtn.addEventListener('click', hidePopup);
    }

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            hidePopup();
        }
    });
    
    const popupForm = popup.querySelector('form');
    if(popupForm) {
        popupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = popupForm.querySelector('input[type="email"]');
            console.log('Subscribed with email:', emailInput.value);
            alert('구독해주셔서 감사합니다!');
            hidePopup();
            emailInput.value = '';
        });
    }

    // --- Dynamic Content Rendering Logic ---
    
    const getTagClass = (tagText) => {
        switch(tagText) {
            case '초보자용': return 'beginner';
            case '전문가용': return 'expert';
            case '부분유료': return 'freemium';
            case '무료': return 'free';
            case '유료': return 'paid';
            case '한시적 무료': return 'free';
            default: return 'paid';
        }
    }

    // --- 1. AI Tools Section (with Search and Filter) ---
    const aiToolsGrid = document.getElementById('ai-tools-grid');
    const searchInput = document.getElementById('search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Modified render function to accept a list of tools
    const renderAiTools = (toolsToRender) => {
        aiToolsGrid.innerHTML = ''; // Clear existing tools
        if (toolsToRender.length === 0) {
            aiToolsGrid.innerHTML = '<p class="no-results">검색 결과가 없습니다.</p>';
            return;
        }
        toolsToRender.forEach(tool => {
            const card = document.createElement('div');
            card.className = 'tool-card';
            
            card.innerHTML = `
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
                <div>
                    <span class="tag ${getTagClass(tool.tags.difficulty)}">${tool.tags.difficulty}</span>
                    <span class="tag ${getTagClass(tool.tags.price)}">${tool.tags.price}</span>
                </div>
                <a href="${tool.link}" class="btn">자세히 보기</a>
            `;
            aiToolsGrid.appendChild(card);
        });
    };

    // Function to filter and render tools based on current state
    const filterAndRender = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const activeCategory = document.querySelector('.filter-btn.active').dataset.category;

        let filteredTools = aiTools;

        // Apply category filter
        if (activeCategory !== 'all') {
            filteredTools = filteredTools.filter(tool => tool.category === activeCategory);
        }

        // Apply search filter
        if (searchTerm) {
            filteredTools = filteredTools.filter(tool => 
                tool.name.toLowerCase().includes(searchTerm) || 
                tool.description.toLowerCase().includes(searchTerm)
            );
        }

        renderAiTools(filteredTools);
    };

    // Add event listeners for search and filter
    if (searchInput) {
        searchInput.addEventListener('input', filterAndRender);
    }

    if (filterButtons) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                document.querySelector('.filter-btn.active').classList.remove('active');
                button.classList.add('active');
                filterAndRender();
            });
        });
    }
    
    // Initial render of all AI tools
    if (aiToolsGrid && typeof aiTools !== 'undefined') {
        renderAiTools(aiTools);
    }


    // --- 2. Render Today's Free AI Tool ---
    const todayContainer = document.getElementById('todays-free-ai-container');
    if (todayContainer && typeof todayFreeTool !== 'undefined') {
        const card = document.createElement('div');
        card.className = 'highlight-card';
        card.innerHTML = `
            <h3>${todayFreeTool.name}</h3>
            <p>${todayFreeTool.description}</p>
            <div>
                <span class="tag ${getTagClass(todayFreeTool.tags.difficulty)}">${todayFreeTool.tags.difficulty}</span>
                <span class="tag ${getTagClass(todayFreeTool.tags.price)}">${todayFreeTool.tags.price}</span>
            </div>
            <div class="native-ad-placeholder">
                <p>(네이티브 광고 영역: '이 툴과 함께 쓰면 좋은 클라우드 스토리지 50% 할인')</p>
            </div>
            <a href="${todayFreeTool.link}" class="btn primary-btn">'${todayFreeTool.name.split(']')[0].substring(1)}' 바로가기</a>
        `;
        todayContainer.appendChild(card);
    }

    // --- 3. Render AI Stacks ---
    const aiStacksGrid = document.getElementById('ai-stacks-grid');
    if (aiStacksGrid && typeof aiStacks !== 'undefined') {
        aiStacks.forEach(stack => {
            const card = document.createElement('div');
            card.className = 'tool-card';
            card.innerHTML = `
                <h3>${stack.name}</h3>
                <p>${stack.description}</p>
                <a href="${stack.link}" class="btn">자세히 보기</a>
            `;
            aiStacksGrid.appendChild(card);
        });
    }

    // --- 4. Render Blog Posts ---
    const blogContainer = document.getElementById('blog-preview-container');
    if (blogContainer && typeof blogPosts !== 'undefined') {
        blogPosts.forEach(post => {
            const link = document.createElement('a');
            link.href = post.link;
            link.innerHTML = `<h4>${post.title}</h4>`;
            blogContainer.appendChild(link);
        });
    }
});