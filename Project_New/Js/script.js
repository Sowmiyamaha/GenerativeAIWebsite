
const observerCallback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
};


const observer = new IntersectionObserver(observerCallback);


const elementsToObserve = document.querySelectorAll('.hidden, .com_a, .hidden-b, .ai_img');


elementsToObserve.forEach((el) => observer.observe(el));


const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);
