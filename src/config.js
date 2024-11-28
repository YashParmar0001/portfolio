module.exports = {
  email: 'yashp758820@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/YashParmar0001',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/yashparmar75',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/yash-parmar-b34b90220/',
    },
    {
      name: 'Freelancer',
      url: 'https://www.freelancer.com/u/yashp7588',
    },
    {
      name: 'Fiverr',
      url: 'https://www.fiverr.com/yashp7588?up_rollout=true',
    },
    {
      name: 'UpWork',
      url: 'https://www.upwork.com/freelancers/~0100764bb9e52b2805?mp_source=share',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    // {
    //   name: 'Experience',
    //   url: '/#jobs',
    // },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
