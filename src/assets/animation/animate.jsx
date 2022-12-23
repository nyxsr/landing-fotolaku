export const NavbarAnimate = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        staggerChildren:.1,
        duration:.5
      }
    },
    exit:{
      opacity:0,
      transition:{
        staggerChildren:.1,
        duration:.5
      }
    }
  }
  
  export const NavbarItemAnimate = {
    hidden:{
      x:30,
      opacity:0
    },
    visible:{
      x:0,
      opacity:1
    },
    exit:{
      x:30,
      opacity:0
    }
  }
  
  export const ModelAnimate1 = {
    initial: {
      x: '25vw',
    },
    first: {
      x: '35vw',
      transition: {
        duration: .6,
      },
    },
    hidden: {
      x: "-50vw",
    },
    fullyHidden: {
      x: "-100vw",
    }
  };
  
  export const ModelAnimate2 = {
    initial: {
      x: 20,
    },
    first: {
      x: 0,
      transition: {
        duration: .6,
      },
    },
    hidden: {
      x: "-50vw",
    },
    fullyHidden: {
      x: "-100vw",
    }
  };
  
  export const ModelAnimate3 = {
    initial: {
      x: "70vw",
      transition: {
          duration: .6,
        },
    },
    first: {
      x: "30vw",
      transition: {
        duration: .3,
      },
    },
    hidden: {
      x: "-50vw",
    },
    fullyHidden: {
      x: "-100vw",
    }
  };
  
  export const ModelAnimate4 = {
    initial: {
      x: "100vw",
    },
    first: {
      x: "30vw",
      transition: {
        duration: .3,
      },
    },
    hidden: {
      x: "-60vw",
    },
    fullyHidden: {
      x: "-100vw",
    }
  };
  
  export const BioVariants = {
    initial:{
      x:'100vw',
      y:'-15vw'
    },
    first:{
      x:"-10vw",
      y:'-15vw',
      transition:{
        duration:.3
      },
    },
    hidden:{
      x: "-50vw"
    }
  }
  