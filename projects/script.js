// Получаем элементы
const projectsInput = document.getElementById('projects-input');
const qualitySlider = document.getElementById('quality-slider');
const lossSlider = document.getElementById('loss-slider');
const burnoutSlider = document.getElementById('burnout-slider');

// Функция обновления значений
function updateSliders() {
    const projects = parseInt(projectsInput.value, 10) || 0; // Получаем значение проектов
    const maxProjects = 5; // Максимальное количество проектов

    // Вычисляем значения
    let quality;
    if (projects === 1) {
        quality = 100; // Полное качество при 1 проекте
    } else if (projects <= 3) {
        quality = Math.max(100 - (projects * 0.5 / maxProjects) * 100, 0); // Медленное снижение качества до 3 проектов
    } else if (projects === 4) {
        quality = 50; // Качество по центру при 4 проектах
    } else {
        quality = 10; // Почти минимальное качество при 5 проектах
    }
    
    let lossProbability;
    if (projects <= 2) {
        lossProbability = Math.min((Math.pow(projects / maxProjects, 2)) * 100, 100); // Вероятность потери проекта до 2 проектов
    } else if (projects === 3) {
        lossProbability = Math.min((Math.pow(projects / maxProjects, 2.5)) * 100, 100); // Повышенная вероятность потери проекта при 3 проектах
    } else if (projects === 4) {
        lossProbability = Math.min((Math.pow(projects / maxProjects, 3)) * 95, 98); // Почти полная вероятность потери проекта при 4 проектах
    } else {
        lossProbability = 90; // Почти полная вероятность потери проекта при 5 проектах
    }

    let burnoutProbability;
    if (projects <= 2) {
        burnoutProbability = Math.min((Math.pow(projects / maxProjects, 1.5)) * 100, 100); // Вероятность выгорания до 2 проектов
    } else if (projects === 3) {
        burnoutProbability = Math.min((Math.pow(projects / maxProjects, 2)) * 100, 100); // Повышенная вероятность выгорания при 3 проектах
    } else if (projects === 4) {
        burnoutProbability = Math.min((Math.pow(projects / maxProjects, 2.5)) * 95, 98); // Почти полная вероятность выгорания при 4 проектах
    } else {
        burnoutProbability = 90; // Почти полная вероятность выгорания при 5 проектах
    }

    // Устанавливаем значения ползунков
    qualitySlider.value = quality.toFixed(0);
    lossSlider.value = lossProbability.toFixed(0);
    burnoutSlider.value = burnoutProbability.toFixed(0);
}

// Событие изменения для поля количества проектов
projectsInput.addEventListener('input', updateSliders);
