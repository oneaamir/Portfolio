// Set up progress bars
document.querySelectorAll('.progress-bar').forEach(bar => {
    const value = bar.getAttribute('data-value');
    const skillName = bar.getAttribute('data-skill');
    bar.style.width = '0%'; 

    const skillNameElement = document.createElement('span');
    skillNameElement.classList.add('skill-name');
    skillNameElement.textContent = skillName; 

    const percentageElement = document.createElement('span');
    percentageElement.classList.add('percentage');
    percentageElement.textContent = value + '%'; 

    bar.appendChild(skillNameElement);
    bar.appendChild(percentageElement);

    setTimeout(() => {
        let width = 0;
        const interval = setInterval(() => {
            if (width >= value) {
                clearInterval(interval);
                bar.classList.add('show'); 
            } else {
                width++;
                bar.style.width = width + '%';
                const percentageNavElement = document.querySelector(`.navbar .nav-item span:contains('${skillName}') + .percentage`);
                if (percentageNavElement) {
                    percentageNavElement.textContent = width + '%';
                }
            }
        }, 10); 
    }, 500); 
});


document.querySelectorAll('.circle').forEach(circle => {
    const value = circle.getAttribute('data-value');
    const percentage = document.createElement('span');
    percentage.textContent = value + '%';
    circle.appendChild(percentage);

    let displayedValue = 0;
    setTimeout(() => {
        const interval = setInterval(() => {
            if (displayedValue >= value) {
                clearInterval(interval);
                percentage.style.opacity = 1; 
            } else {
                displayedValue++;
                percentage.textContent = displayedValue + '%'; 
            }
        }, 10); 
    }, 600); 
});
