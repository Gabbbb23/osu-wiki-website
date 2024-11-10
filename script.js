document.addEventListener('DOMContentLoaded', function() {
    const infoMap = new Map();
    infoMap.set('Score', 'On the right of the health bar is the total score. The combo and accuracy can affect the total score.');
    infoMap.set('Accuracy', 'Below the total score is the accuracy. The accuracy is calculated by the timing of the hit on the notes.');
    infoMap.set('Timer', 'The circle beside the accuracy (and below the score) is a timer for the duration of the beatmap.');
    infoMap.set('Slider', 'This is a slider. First, tap on the circle at the beginning of the slider, called the slider head, at the right moment. When tapped, a ball will begin to move across the path. The blue outer circle, called the follow circle, will appear when holding onto the slider\'s ball, but will disappear when the cursor is outside the circle or the button is released. Hold the mouse/keyboard button (or keep the pen on the tablet) and follow the ball within the follow circle as it moves.');
    infoMap.set('Hit Circle', 'Coloured circles with numbers on top of them, called hit circles, will appear on the playfield when playing. A thin, similarly coloured approach circle on the outside of the hit circle will shrink over time. Tap on the hit circles at the exact point when the approach circle touches their white borders, in the order indicated by the numbers. After hitting a hit circle, a number appears indicating the judgement received for how accurate the timing of the hit was.');
    infoMap.set('Mouse/Keyboard Buttons', 'The buttons in the middle-right are the button indicators. This shows your mouse button or keyboard clicks.');
    infoMap.set('Combo', 'The number on the bottom left is the combo counter/score multiplier.');
    infoMap.set('Hit Judgement', 'The number that appears after you click a note. A perfectly timed hit is a 300 (or Geki), a slightly off timed hit is a 100, and a badly timed hit is a 50. Judgement determines a hit object\'s base scoring value.');
    infoMap.set('Cursor', 'Use the cursor to aim the circles.');
    infoMap.set('Unstable Rate', 'The bar at the bottom center is the unstable rate. This shows you how early(left) or late(right) your clicks are.');
    infoMap.set('Mods', 'The top right side below the accuracy shows the active mods.');

    // osu!standard
    infoMap.set('osu! Playfield', 'The gameplay area field of osu!standard. You can change the background dim in settings.');
    infoMap.set('Health Bar', 'The top-left bar is the health bar, which will decrease at a steady rate (depending on the beatmap\'s difficulty settings), but can be replenished by tapping notes at the right time or spinning the spinner. A perfectly timed hit (a 300 or Geki) will recover health more than a badly timed hit (50). A total miss will take a good chunk of health out of the health bar.');

    // osu!mania
    infoMap.set('osu! Playfield ', 'The gameplay area field of osu!mania.');
    infoMap.set('Score ', 'On the top-right is the total score. The combo and accuracy can affect the total score.');
    infoMap.set('Health Bar ', 'The bar in the bottom-right of the playfield is the health bar. Health bar regeneration occurs slowly while holding the hold note(s) or tapping the notes on time. Please note that health drain is disabled in osu!mania, so only the hit objects will affect the health bar.');
    infoMap.set('Hold Notes', 'Hold notes are the sliders and spinners of osu!mania. When the hold note reaches the judgement line, tap the starting note in time with correct key, hold, and release it at the ending note of the hold note. Depending on the song and mapping quirks, it is possible that other notes or hold notes to appear while holding the previous hold note(s).');
    infoMap.set('Judgement Line', 'The line at which you tap the note on time. Judgement determines a hit object\'s base scoring value.');
    infoMap.set('Mania Tiles', 'The mania tile buttons. This shows your keyboard clicks.');
    infoMap.set('Mania Notes', 'Notes are the hit circles of osu!mania. The falling notes must be tapped on the judgement line, with correct key corresponding to each of the note it falls to. More keys corresponding to the falling notes must be tapped simultaneously if the notes fall simultaneously. A score burst will be given when tapped a correct key corresponding to the note in the judgement line.');
    infoMap.set('Background', 'The background contains the background image with an option to change the background dim.');

    // osu!taiko
    infoMap.set('osu! Playfield  ', 'The gameplay area field of osu!taiko.');
    infoMap.set('Health Bar  ', 'The bar in the top-left is the health bar. The health bar, which, unlike other game modes, starts empty and must be filled up to at least 50% full or half-full to pass the beatmap. Please note that health drain is disabled in osu!taiko, so only hit objects will affect the health bar.');
    infoMap.set('Hit Judgement  ', ' The number below the score is the hit judgement. The Judgement determines a hit object\'s base scoring value (300, 100, or 0 in case of a miss). The value of regular and large notes depends on hit timing, while every other object\'s base value is constant.');
    infoMap.set('Keyboard Buttons  ', 'The buttons in the right of the playfield are the button indicators. This shows your keyboard inputs.');
    infoMap.set('Combo  ', 'The number on the keyboard buttons is the combo counter/score multiplier.');
    infoMap.set('Taiko Notes', 'Taiko notes will appear as either a red or a blue circle. These circles are called Don (for red notes) and Katsu or Kat (for blue notes), respectively. If it is a small red note, press the button bound to the inner portion of the taiko drum or hit the large flat area (centre) of the TaTaCon. If it is a small blue note, press the button bound to the outer ring of the taiko drum or hit the sides of the TaTaCon. If the note is a LARGE circle, press or hit both of either inner or outer drum depending on the colour of the note for double the points (a single correct hit will give single point instead). The notes must be pressed or hit in the small white judgement circle next to the drum. Hitting the wrong colour, or both red and blue colours at the same time, will be considered a miss.');

    // osu!catch
    infoMap.set('Fruits', 'To catch these fruits, make sure it falls to the plate and not over the plate. Collected fruits will always give 300 points each, increment combo by 1, and treated as 300 in result screen.');
    infoMap.set('Unstable Rate ', 'The unstable rate shows you how late you catch the fruits or if you\'re in time.');
    infoMap.set('Plate', 'The catcher holding the plate is what you use to catch the fruits and move it left or right.');
    
    window.updateInfoDisplay = function(areaId) {
        const infoDisplay = document.getElementById('info-display');
        const infoTitle = document.getElementById('info-title');
        infoDisplay.textContent = infoMap.get(areaId);
        infoTitle.textContent = areaId;
    };

    document.querySelectorAll('a[data-offset]').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const offset = parseInt(this.getAttribute('data-offset'), 10);
            const targetElement = document.getElementById(targetId);
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    document.querySelectorAll('a[data-target], area[data-target]').forEach(element => {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            const targetPosition = targetElement.getBoundingClientRect().bottom + window.scrollY - window.innerHeight + 12;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});