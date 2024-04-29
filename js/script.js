// test
console.log("Hello World!");
// API https://flynn.boolean.careers/exercises/api/random/mail

const { createApp } = Vue;

createApp({
  data() {
    return {
      emailsArray: [],
    };
  },
  created() {
    for (let i = 0; i < 10; i++) {
      this.generateArray();
    }
  },
  methods: {
    generateArray: function () {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((apiResp) => {
          console.log(apiResp);
          this.emailsArray.push(apiResp.data.response);
          console.log(this.emailsArray);
        });
    },
  },
}).mount("#app");
