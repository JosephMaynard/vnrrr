export interface IRedditAward {
  giver_coin_reward: null;
  subreddit_id: string | null;
  is_new: boolean;
  days_of_drip_extension: number;
  coin_price: number;
  id: string;
  penny_donate: null;
  award_sub_type: string;
  coin_reward: number;
  icon_url: string;
  days_of_premium: number;
  tiers_by_required_awardings: null;
  resized_icons: IRedditMediaItem[];
  icon_width: number;
  static_icon_width: number;
  start_date: null;
  is_enabled: boolean;
  awardings_required_to_grant_benefits: null;
  description: string;
  end_date: null;
  subreddit_coin_reward: number;
  count: number;
  static_icon_height: number;
  name: string;
  resized_static_icons: IRedditMediaItem[];
  icon_format: null;
  icon_height: number;
  penny_price: null;
  award_type: string;
  static_icon_url: string;
}

export type TRedditPostKinds = 't1' | 't2' | 't3' | 't4' | 't5' | 't6' | 'more';

export type TRedditPostHint = 'image';

export interface IAuthorFlairRichtext {
  [key: string]: string;
}

export interface IRedditMediaItem {
  url: string;
  width: number;
  height: number;
}

export interface IRedditVideo {
  fallback_url: string;
  height: number;
  width: number;
  scrubber_media_url: string;
  dash_url: string;
  duration: number;
  hls_url: string;
  is_gif: boolean;
  transcoding_status: 'completed';
}

export interface IPostPreview {
  images?: [
    {
      source: IRedditMediaItem;
      resolutions: IRedditMediaItem[];
      variants?: {
        gif: {
          source: IRedditMediaItem;
          resolutions: IRedditMediaItem[];
        };
        mp4: {
          source: IRedditMediaItem;
          resolutions: IRedditMediaItem[];
        };
      };
      id: string;
    }
  ];
  reddit_video_preview?: IRedditVideo;
  enabled: boolean;
}

export interface ISecureMedia {
  reddit_video?: IRedditVideo;
}

export interface IRedditPostData {
  all_awardings: IRedditAward[];
  allow_live_comments: boolean;
  approved_at_utc: number | null;
  approved_by: null;
  archived: boolean;
  author_flair_background_color: null;
  author_flair_css_class: null;
  author_flair_richtext: IAuthorFlairRichtext[];
  author_flair_template_id: null;
  author_flair_text_color: null;
  author_flair_text: null;
  author_flair_type: string;
  author_fullname: string;
  author_patreon_flair: boolean;
  author_premium: boolean;
  author: string;
  awarders: [];
  banned_at_utc: number | null;
  banned_by: null;
  body_html?: string | null;
  body?: string | null;
  can_gild: boolean;
  can_mod_post: boolean;
  category: null;
  clicked: boolean;
  content_categories: null;
  contest_mode: boolean;
  created_utc: number;
  created: number;
  discussion_type: null;
  distinguished: null;
  domain: string;
  downs: number;
  edited: boolean;
  gilded: number;
  gildings: { gid_1: 1 };
  hidden: boolean;
  hide_score: boolean;
  id: string;
  is_crosspostable: boolean;
  is_meta: boolean;
  is_original_content: boolean;
  is_reddit_media_domain: boolean;
  is_robot_indexable: boolean;
  is_self: boolean;
  is_video: boolean;
  likes: null;
  link_flair_background_color: string;
  link_flair_css_class: null;
  link_flair_richtext: [];
  link_flair_text_color: string;
  link_flair_text: null;
  link_flair_type: string;
  locked: boolean;
  media_embed: {};
  media_only: boolean;
  media: null;
  mod_note: null;
  mod_reason_by: null;
  mod_reason_title: null;
  mod_reports: [];
  name: string;
  no_follow: boolean;
  num_comments: number;
  num_crossposts: number;
  num_reports: null;
  over_18: boolean;
  parent_whitelist_status: string;
  permalink: string;
  pinned: boolean;
  post_hint: TRedditPostHint;
  preview: IPostPreview;
  pwls: number;
  quarantine: boolean;
  removal_reason: null;
  removed_by_category: null;
  removed_by: null;
  replies?: IRedditCommentsResponseItem;
  report_reasons: null;
  saved: boolean;
  score: number;
  secure_media_embed: {};
  secure_media?: ISecureMedia;
  selftext_html: string | null;
  selftext: string;
  send_replies: boolean;
  spoiler: boolean;
  stickied: boolean;
  subreddit_id: string;
  subreddit_name_prefixed: string;
  subreddit_subscribers: number;
  subreddit_type: string;
  subreddit: string;
  suggested_sort: null;
  thumbnail_height: number;
  thumbnail_width: number;
  thumbnail: string;
  title: string;
  top_awarded_type: null;
  total_awards_received: number;
  treatment_tags: [];
  ups: number;
  upvote_ratio: number;
  url_overridden_by_dest: string;
  url: string;
  user_reports: [];
  view_count: null;
  visited: boolean;
  whitelist_status: string;
  wls: number;
}

export interface IRedditPost {
  kind: TRedditPostKinds;
  data: IRedditPostData;
}

export interface IRedditCommentsResponseItem {
  kind: 'Listing';
  data: {
    modhash: string;
    dist: string | null;
    after: string | null;
    before: string | null;
    children: IRedditPost[];
  };
}

export type TRedditCommentsResponse = IRedditCommentsResponseItem[];
