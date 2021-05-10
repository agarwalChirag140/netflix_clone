module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "100": "30rem",
        "101": "35rem",
        "102": "45rem"
      },
      width: {
        "1/5": "56%"
      },
      scale: {
        '0': '0',
       '25': '.25',
        '50': '.5',
        '75': '.75'
        ,
        '90': '.9',
       '95': '.95',
        '100': '1',
       '105': '1.05',
       '110': '1.1',
        '125': '1.25',
        '150': '1.5',
        '160': '1.08',
        '200': '2',
      },
      inset: {
        "97": "96rem",
      },
      backgroundColor: theme => ({
          "transparent": "rgba(0,0,0,0.85)"
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
