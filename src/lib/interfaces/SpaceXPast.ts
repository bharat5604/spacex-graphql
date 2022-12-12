export interface SpaceXPast {
  mission_name: string;
  launch_date_local: string;
  launch_site: {
    site_name_long: string;
  };
  links: {
    article_link: string | null | undefined;
    video_link: string;
  };
}
