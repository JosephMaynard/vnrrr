export interface IRedditImageItem {
  url: string;
  width: number;
  height: number;
}

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
  resized_icons: IRedditImageItem[];
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
  resized_static_icons: IRedditImageItem[];
  icon_format: null;
  icon_height: number;
  penny_price: null;
  award_type: string;
  static_icon_url: string;
}

export type TRedditPostKinds = 't1' | 't2' | 't3' | 't4' | 't5' | 't6';

export type TRedditPostHint = 'image';

export interface IRedditPost {
  kind: TRedditPostKinds;
  data: {
    approved_at_utc: number | null;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title: null;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: [];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class: null;
    downs: number;
    thumbnail_height: number;
    top_awarded_type: null;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color: null;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    media_embed: {};
    thumbnail_width: number;
    author_flair_template_id: null;
    is_original_content: boolean;
    user_reports: [];
    secure_media: null;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category: null;
    secure_media_embed: {};
    link_flair_text: null;
    can_mod_post: boolean;
    score: number;
    approved_by: null;
    author_premium: boolean;
    thumbnail: string;
    edited: boolean;
    author_flair_css_class: null;
    author_flair_richtext: [];
    gildings: { gid_1: 1 };
    post_hint: TRedditPostHint;
    content_categories: null;
    is_self: boolean;
    mod_note: null;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category: null;
    banned_by: null;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html: null;
    likes: null;
    suggested_sort: null;
    banned_at_utc: number | null;
    url_overridden_by_dest: string;
    view_count: null;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview: {
      images: [
        {
          source: IRedditImageItem;
          resolutions: IRedditImageItem[];
          variants: {};
          id: string;
        }
      ];
      enabled: boolean;
    };
    all_awardings: IRedditAward[];
    awarders: [];
    media_only: boolean;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text: null;
    treatment_tags: [];
    visited: boolean;
    removed_by: null;
    num_reports: null;
    distinguished: null;
    subreddit_id: string;
    mod_reason_by: null;
    removal_reason: null;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    report_reasons: null;
    author: string;
    discussion_type: null;
    num_comments: number;
    send_replies: boolean;
    whitelist_status: string;
    contest_mode: boolean;
    mod_reports: [];
    author_patreon_flair: boolean;
    author_flair_text_color: null;
    permalink: string;
    parent_whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    media: null;
    is_video: boolean;
  };
}

export interface IPostsReducer {
  loading: boolean;
  posts: IRedditPost[];
  postIDs: string[];
}

export interface IRedditPostsResponce {
  data: {
    after: string | null;
    before: string | null;
    children: IRedditPost[];
    dist: number;
    modhash: string;
  };
  kind: string;
}
