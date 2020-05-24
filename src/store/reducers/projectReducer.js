const initState = {
  projects: [
    {id: '1', title: 'Help me find Peach!', content: 'Mario ipsum RGB mushroom 1-up. Pokey stopwatch heart? Heart life invincible Princess Toadstool potion snift pokey tweeter ostro Nintendo Entertainment System? Heart starman Luigi spark Mushroom Kingdom spark coin? Pow autobomb A-button invincible Toad tweeter. '},
    {id: '2', title: 'Collect all the stars', content: 'astle beezo radio frequency modulator, birdo game pak shell game pak Mario game pak. Invincible Princess Toadstool heart shell platform start button mushroom Japan potion NES select button 8-bit starman Princess Toadstool, stopwatch ostro game pak! Platform shell 8-bit run A-button, Luigi ninji RGB 1-up rocket invincible Princess Toadstool Nintendo Entertainment System cobrat 1-up, Luigi jump.' },
    {id: '3', title: 'Egg hunt with Yoshi', content: 'oopa paratroopa fire flower? Jump koopa paratroopa plumber reset swim red shell pipe super mushroom, side-scrolling Mario? Blooper podoboo koopa paratroopa time? B-button PAL platform podoboo slide lava fire bar pixel starman brick invincible Mario 8-bit. Super Mario lakitu warp zone, pipe castle NES bill blaster. NES radio frequency modulator fire bar NES Mario cloud koopa troopa.'}
  ]
};

const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;  

    default:
      return state  
  }
}

export default projectReducer;