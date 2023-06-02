export default defineAppConfig({
  social: {
    gitUrl: "https://github.com/kyoapps-kyo",
    youtubeUrl: ""
  },
  site : {
    title: '',
  },
  components: [{
    path: '~/components',
    global: true
  }],
  vercelAnalytics: {
    mode: "auto",
    debug: true,
    beforeSend: (event) => {
      if (event.url.includes("/private")) return null;
      return event;
    },
  },
});
