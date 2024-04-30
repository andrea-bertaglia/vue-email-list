// test
console.log("Hello World!");
// API https://flynn.boolean.careers/exercises/api/random/mail

const { createApp } = Vue;

createApp({
  data() {
    return {
      emailsArray: [],
      isLoading: true,
    };
  },
  created() {
    this.generateArray();
  },
  methods: {
    generateArray: function () {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((apiResp) => {
            console.log(apiResp);
            this.emailsArray.push(apiResp.data.response);
            if (this.emailsArray.length === 10) {
              this.isLoading = false;
            }
          });
      }
    },
  },
}).mount("#app");
