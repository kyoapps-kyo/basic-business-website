import defineAppConfig from "@/app.config";
const { social } = defineAppConfig;

export interface MenuData {
  title?: string;
  path?: string;
  children?: MenuData[];
}

export const useMenu = () => {
  const menu: MenuData[] = [
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "Youtube",
      path: social.youtubeUrl
    },
    {
      title: "Services",
      path: "/Services",
    },
    {
      title: "Blog",
      children: [
        {
          title: "Web Development",
          path: "/blog/web",
        },
        {
          title: "Mobile Development",
          path: "/blog/mobile",
        },
        {
          title: "Design",
          path: "/blog/design",
        },
      ],
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
  ];
  return { menu };
};
