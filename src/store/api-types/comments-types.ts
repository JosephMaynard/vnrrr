import { TRedditPostKinds, IRedditPostData } from './post-types';

export interface IRedditCommentsResponseItemChild {
  kind: TRedditPostKinds;
  data: {
    approved_at_utc: null;
    subreddit: string;
    selftext: string;
    user_reports: [];
    saved: boolean;
    mod_reason_title: null;
    gilded: 1;
    clicked: boolean;
    title: string;
    link_flair_richtext: [];
    subreddit_name_prefixed: 'r/politics';
    hidden: boolean;
    pwls: 6;
    link_flair_css_class: null;
    downs: 0;
    thumbnail_height: 93;
    top_awarded_type: null;
    parent_whitelist_status: 'all_ads';
    hide_score: boolean;
    name: 't3_j93r95';
    quarantine: boolean;
    link_flair_text_color: 'dark';
    upvote_ratio: 0.95;
    author_flair_background_color: null;
    subreddit_type: 'public';
    ups: 32733;
    total_awards_received: 48;
    media_embed: {};
    thumbnail_width: 140;
    author_flair_template_id: 'c31d676a-8e72-11e6-b446-0e01414ea19d';
    is_original_content: boolean;
    author_fullname: 't2_1abjo';
    secure_media: null;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category: null;
    secure_media_embed: {};
    link_flair_text: null;
    can_mod_post: boolean;
    score: 32733;
    approved_by: null;
    author_premium: true;
    thumbnail: 'https://b.thumbs.redditmedia.com/fA-p-8d0_c7v0ko6-h70OvjUgt-vnzvjm5B9Lyulp7U.jpg';
    edited: boolean;
    author_flair_css_class: 'northcarolina-flag';
    author_flair_richtext: [
      {
        a: ':flag-nc:';
        u: 'https://emoji.redditmedia.com/onk5kb3xoxe11_t5_2cneq/flag-nc';
        e: 'emoji';
      },
      { e: 'text'; t: ' North Carolina' }
    ];
    gildings: { gid_1: 3; gid_2: 1 };
    post_hint: 'link';
    content_categories: null;
    is_self: boolean;
    mod_note: null;
    created: 1602444198.0;
    link_flair_type: 'text';
    wls: 6;
    removed_by_category: null;
    banned_by: null;
    author_flair_type: 'richtext';
    domain: 'politico.com';
    allow_live_comments: true;
    selftext_html: null;
    likes: null;
    suggested_sort: null;
    banned_at_utc: null;
    url_overridden_by_dest: 'https://www.politico.com/news/2020/10/11/jaime-harrison-shatters-senate-fundraising-record-for-south-carolina-race-428541';
    view_count: null;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: true;
    pinned: boolean;
    over_18: boolean;
    preview: {
      images: [
        {
          source: {
            url: 'https://external-preview.redd.it/CG8pHopOQ0-LlqT521lg_DCCON16Zwsfutt9jtmmKnw.jpg?auto=webp\u0026s=78d6bb1e5cd7f2ffcd7e86eb566a55a487d83fbb';
            width: 1158;
            height: 772;
          };
          resolutions: [
            {
              url: 'https://external-preview.redd.it/CG8pHopOQ0-LlqT521lg_DCCON16Zwsfutt9jtmmKnw.jpg?width=108\u0026crop=smart\u0026auto=webp\u0026s=c33e313a29a0ca2e117962ee30d71f4b53e6aa4e';
              width: 108;
              height: 72;
            },
            {
              url: 'https://external-preview.redd.it/CG8pHopOQ0-LlqT521lg_DCCON16Zwsfutt9jtmmKnw.jpg?width=216\u0026crop=smart\u0026auto=webp\u0026s=47d521494e07f9efb6227d17640165c337fd4a71';
              width: 216;
              height: 144;
            },
            {
              url: 'https://external-preview.redd.it/CG8pHopOQ0-LlqT521lg_DCCON16Zwsfutt9jtmmKnw.jpg?width=320\u0026crop=smart\u0026auto=webp\u0026s=af1b502d30e80fd519b6d15882e9de62d49eb9e8';
              width: 320;
              height: 213;
            },
            {
              url: 'https://external-preview.redd.it/CG8pHopOQ0-LlqT521lg_DCCON16Zwsfutt9jtmmKnw.jpg?width=640\u0026crop=smart\u0026auto=webp\u0026s=e728ddb9bd4bc41acd8d4620913822bc6c49b43c';
              width: 640;
              height: 426;
            },
            {
              url: 'https://external-preview.redd.it/CG8pHopOQ0-LlqT521lg_DCCON16Zwsfutt9jtmmKnw.jpg?width=960\u0026crop=smart\u0026auto=webp\u0026s=4ded7f03d162d067d5bbc35b00655a6d68c25913';
              width: 960;
              height: 640;
            },
            {
              url: 'https://external-preview.redd.it/CG8pHopOQ0-LlqT521lg_DCCON16Zwsfutt9jtmmKnw.jpg?width=1080\u0026crop=smart\u0026auto=webp\u0026s=285c2760120963381ec1002b5dcf2026940ed1c3';
              width: 1080;
              height: 720;
            }
          ];
          variants: {};
          id: 'cxjnpASw4duB1ZzhKJAHG-8GclbCXSWmWrTDRUBEBpw';
        }
      ];
      enabled: boolean;
    };
    all_awardings: [
      {
        giver_coin_reward: null;
        subreddit_id: null;
        is_new: boolean;
        days_of_drip_extension: 0;
        coin_price: 500;
        id: 'gid_2';
        penny_donate: null;
        coin_reward: 100;
        icon_url: 'https://www.redditstatic.com/gold/awards/icon/gold_512.png';
        days_of_premium: 7;
        icon_height: 512;
        tiers_by_required_awardings: null;
        resized_icons: [
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/gold_16.png';
            width: 16;
            height: 16;
          },
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/gold_32.png';
            width: 32;
            height: 32;
          },
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/gold_48.png';
            width: 48;
            height: 48;
          },
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/gold_64.png';
            width: 64;
            height: 64;
          },
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/gold_128.png';
            width: 128;
            height: 128;
          }
        ];
        icon_width: 512;
        static_icon_width: 512;
        start_date: null;
        is_enabled: true;
        awardings_required_to_grant_benefits: null;
        description: 'Gives the author a week of Reddit Premium, %{coin_symbol}100 Coins to do with as they please, and shows a Gold Award.';
        end_date: null;
        subreddit_coin_reward: 0;
        count: 1;
        static_icon_height: 512;
        name: 'Gold';
        resized_static_icons: [
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/gold_16.png';
            width: 16;
            height: 16;
          },
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/gold_32.png';
            width: 32;
            height: 32;
          },
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/gold_48.png';
            width: 48;
            height: 48;
          },
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/gold_64.png';
            width: 64;
            height: 64;
          },
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/gold_128.png';
            width: 128;
            height: 128;
          }
        ];
        icon_format: null;
        award_sub_type: 'GLOBAL';
        penny_price: null;
        award_type: 'global';
        static_icon_url: 'https://www.redditstatic.com/gold/awards/icon/gold_512.png';
      },
      {
        giver_coin_reward: null;
        subreddit_id: null;
        is_new: boolean;
        days_of_drip_extension: 0;
        coin_price: 300;
        id: 'award_28e8196b-d4e9-45bc-b612-cd4c7d3ed4b3';
        penny_donate: null;
        coin_reward: 0;
        icon_url: 'https://i.redd.it/award_images/t5_22cerq/94pn64yuas941_RocketLike.png';
        days_of_premium: 0;
        icon_height: 2048;
        tiers_by_required_awardings: null;
        resized_icons: [
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/94pn64yuas941_RocketLike.png?width=16\u0026height=16\u0026auto=webp\u0026s=c1400eb6ea235d0c96c3aa6e271c71d7f339cbd4';
            width: 16;
            height: 16;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/94pn64yuas941_RocketLike.png?width=32\u0026height=32\u0026auto=webp\u0026s=77ad345b2f9b062140e028764394594326771a17';
            width: 32;
            height: 32;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/94pn64yuas941_RocketLike.png?width=48\u0026height=48\u0026auto=webp\u0026s=5b5211166e4b260311ad9f3ea31d3b815110769c';
            width: 48;
            height: 48;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/94pn64yuas941_RocketLike.png?width=64\u0026height=64\u0026auto=webp\u0026s=bf3a2c642ad50547087d770c65c29777970d3af3';
            width: 64;
            height: 64;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/94pn64yuas941_RocketLike.png?width=128\u0026height=128\u0026auto=webp\u0026s=eae06d6a70c62c78dc66cb14f2a84651cb822cc4';
            width: 128;
            height: 128;
          }
        ];
        icon_width: 2048;
        static_icon_width: 2048;
        start_date: null;
        is_enabled: true;
        awardings_required_to_grant_benefits: null;
        description: "When an upvote just isn't enough, smash the Rocket Like.";
        end_date: null;
        subreddit_coin_reward: 0;
        count: 8;
        static_icon_height: 2048;
        name: 'Rocket Like';
        resized_static_icons: [
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/94pn64yuas941_RocketLike.png?width=16\u0026height=16\u0026auto=webp\u0026s=c1400eb6ea235d0c96c3aa6e271c71d7f339cbd4';
            width: 16;
            height: 16;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/94pn64yuas941_RocketLike.png?width=32\u0026height=32\u0026auto=webp\u0026s=77ad345b2f9b062140e028764394594326771a17';
            width: 32;
            height: 32;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/94pn64yuas941_RocketLike.png?width=48\u0026height=48\u0026auto=webp\u0026s=5b5211166e4b260311ad9f3ea31d3b815110769c';
            width: 48;
            height: 48;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/94pn64yuas941_RocketLike.png?width=64\u0026height=64\u0026auto=webp\u0026s=bf3a2c642ad50547087d770c65c29777970d3af3';
            width: 64;
            height: 64;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/94pn64yuas941_RocketLike.png?width=128\u0026height=128\u0026auto=webp\u0026s=eae06d6a70c62c78dc66cb14f2a84651cb822cc4';
            width: 128;
            height: 128;
          }
        ];
        icon_format: null;
        award_sub_type: 'GLOBAL';
        penny_price: null;
        award_type: 'global';
        static_icon_url: 'https://i.redd.it/award_images/t5_22cerq/94pn64yuas941_RocketLike.png';
      },
      {
        giver_coin_reward: null;
        subreddit_id: null;
        is_new: boolean;
        days_of_drip_extension: 0;
        coin_price: 150;
        id: 'award_f44611f1-b89e-46dc-97fe-892280b13b82';
        penny_donate: null;
        coin_reward: 0;
        icon_url: 'https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png';
        days_of_premium: 0;
        icon_height: 2048;
        tiers_by_required_awardings: null;
        resized_icons: [
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=16\u0026height=16\u0026auto=webp\u0026s=a5662dfbdb402bf67866c050aa76c31c147c2f45';
            width: 16;
            height: 16;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=32\u0026height=32\u0026auto=webp\u0026s=a6882eb3f380e8e88009789f4d0072e17b8c59f1';
            width: 32;
            height: 32;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=48\u0026height=48\u0026auto=webp\u0026s=e50064b090879e8a0b55e433f6ee61d5cb5fbe1d';
            width: 48;
            height: 48;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=64\u0026height=64\u0026auto=webp\u0026s=8e5bb2e76683cb6b161830bcdd9642049d6adc11';
            width: 64;
            height: 64;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=128\u0026height=128\u0026auto=webp\u0026s=eda4a9246f95f42ee6940cc0ec65306fd20de878';
            width: 128;
            height: 128;
          }
        ];
        icon_width: 2048;
        static_icon_width: 2048;
        start_date: null;
        is_enabled: true;
        awardings_required_to_grant_benefits: null;
        description: 'Thank you stranger. Shows the award.';
        end_date: null;
        subreddit_coin_reward: 0;
        count: 12;
        static_icon_height: 2048;
        name: 'Helpful';
        resized_static_icons: [
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=16\u0026height=16\u0026auto=webp\u0026s=a5662dfbdb402bf67866c050aa76c31c147c2f45';
            width: 16;
            height: 16;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=32\u0026height=32\u0026auto=webp\u0026s=a6882eb3f380e8e88009789f4d0072e17b8c59f1';
            width: 32;
            height: 32;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=48\u0026height=48\u0026auto=webp\u0026s=e50064b090879e8a0b55e433f6ee61d5cb5fbe1d';
            width: 48;
            height: 48;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=64\u0026height=64\u0026auto=webp\u0026s=8e5bb2e76683cb6b161830bcdd9642049d6adc11';
            width: 64;
            height: 64;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=128\u0026height=128\u0026auto=webp\u0026s=eda4a9246f95f42ee6940cc0ec65306fd20de878';
            width: 128;
            height: 128;
          }
        ];
        icon_format: null;
        award_sub_type: 'GLOBAL';
        penny_price: null;
        award_type: 'global';
        static_icon_url: 'https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png';
      },
      {
        giver_coin_reward: null;
        subreddit_id: null;
        is_new: boolean;
        days_of_drip_extension: 0;
        coin_price: 125;
        id: 'award_5f123e3d-4f48-42f4-9c11-e98b566d5897';
        penny_donate: null;
        coin_reward: 0;
        icon_url: 'https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png';
        days_of_premium: 0;
        icon_height: 2048;
        tiers_by_required_awardings: null;
        resized_icons: [
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16\u0026height=16\u0026auto=webp\u0026s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0';
            width: 16;
            height: 16;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32\u0026height=32\u0026auto=webp\u0026s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef';
            width: 32;
            height: 32;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48\u0026height=48\u0026auto=webp\u0026s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63';
            width: 48;
            height: 48;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64\u0026height=64\u0026auto=webp\u0026s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb';
            width: 64;
            height: 64;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128\u0026height=128\u0026auto=webp\u0026s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b';
            width: 128;
            height: 128;
          }
        ];
        icon_width: 2048;
        static_icon_width: 2048;
        start_date: null;
        is_enabled: true;
        awardings_required_to_grant_benefits: null;
        description: 'When you come across a feel-good thing.';
        end_date: null;
        subreddit_coin_reward: 0;
        count: 8;
        static_icon_height: 2048;
        name: 'Wholesome';
        resized_static_icons: [
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16\u0026height=16\u0026auto=webp\u0026s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0';
            width: 16;
            height: 16;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32\u0026height=32\u0026auto=webp\u0026s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef';
            width: 32;
            height: 32;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48\u0026height=48\u0026auto=webp\u0026s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63';
            width: 48;
            height: 48;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64\u0026height=64\u0026auto=webp\u0026s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb';
            width: 64;
            height: 64;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128\u0026height=128\u0026auto=webp\u0026s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b';
            width: 128;
            height: 128;
          }
        ];
        icon_format: null;
        award_sub_type: 'GLOBAL';
        penny_price: null;
        award_type: 'global';
        static_icon_url: 'https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png';
      },
      {
        giver_coin_reward: null;
        subreddit_id: null;
        is_new: boolean;
        days_of_drip_extension: 0;
        coin_price: 100;
        id: 'gid_1';
        penny_donate: null;
        coin_reward: 0;
        icon_url: 'https://www.redditstatic.com/gold/awards/icon/silver_512.png';
        days_of_premium: 0;
        icon_height: 512;
        tiers_by_required_awardings: null;
        resized_icons: [
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/silver_16.png';
            width: 16;
            height: 16;
          },
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/silver_32.png';
            width: 32;
            height: 32;
          },
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/silver_48.png';
            width: 48;
            height: 48;
          },
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/silver_64.png';
            width: 64;
            height: 64;
          },
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/silver_128.png';
            width: 128;
            height: 128;
          }
        ];
        icon_width: 512;
        static_icon_width: 512;
        start_date: null;
        is_enabled: true;
        awardings_required_to_grant_benefits: null;
        description: "Shows the Silver Award... and that's it.";
        end_date: null;
        subreddit_coin_reward: 0;
        count: 3;
        static_icon_height: 512;
        name: 'Silver';
        resized_static_icons: [
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/silver_16.png';
            width: 16;
            height: 16;
          },
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/silver_32.png';
            width: 32;
            height: 32;
          },
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/silver_48.png';
            width: 48;
            height: 48;
          },
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/silver_64.png';
            width: 64;
            height: 64;
          },
          {
            url: 'https://www.redditstatic.com/gold/awards/icon/silver_128.png';
            width: 128;
            height: 128;
          }
        ];
        icon_format: null;
        award_sub_type: 'GLOBAL';
        penny_price: null;
        award_type: 'global';
        static_icon_url: 'https://www.redditstatic.com/gold/awards/icon/silver_512.png';
      },
      {
        giver_coin_reward: 0;
        subreddit_id: null;
        is_new: boolean;
        days_of_drip_extension: 0;
        coin_price: 100;
        id: 'award_19860e30-3331-4bac-b3d1-bd28de0c7974';
        penny_donate: 0;
        coin_reward: 0;
        icon_url: 'https://i.redd.it/award_images/t5_22cerq/v1mxw8i6wnf51_Heartwarming.png';
        days_of_premium: 0;
        icon_height: 2048;
        tiers_by_required_awardings: null;
        resized_icons: [
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/v1mxw8i6wnf51_Heartwarming.png?width=16\u0026height=16\u0026auto=webp\u0026s=4e50438bd2d72ae5398e839ac2bdcccf323fca79';
            width: 16;
            height: 16;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/v1mxw8i6wnf51_Heartwarming.png?width=32\u0026height=32\u0026auto=webp\u0026s=e730f68de038499700c6301470812c29ef6a8555';
            width: 32;
            height: 32;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/v1mxw8i6wnf51_Heartwarming.png?width=48\u0026height=48\u0026auto=webp\u0026s=8d7c7fa22e6ff3b1b0a347839e42f493eb5f6cbc';
            width: 48;
            height: 48;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/v1mxw8i6wnf51_Heartwarming.png?width=64\u0026height=64\u0026auto=webp\u0026s=11ec2a72e2724017bb8479639edce8a7f2ba64f4';
            width: 64;
            height: 64;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/v1mxw8i6wnf51_Heartwarming.png?width=128\u0026height=128\u0026auto=webp\u0026s=1e936ae571e89abb5a5aaa2efd2d7cfb0ed1b537';
            width: 128;
            height: 128;
          }
        ];
        icon_width: 2048;
        static_icon_width: 2048;
        start_date: null;
        is_enabled: true;
        awardings_required_to_grant_benefits: null;
        description: 'I needed this today';
        end_date: null;
        subreddit_coin_reward: 0;
        count: 1;
        static_icon_height: 2048;
        name: 'Heartwarming';
        resized_static_icons: [
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/v1mxw8i6wnf51_Heartwarming.png?width=16\u0026height=16\u0026auto=webp\u0026s=4e50438bd2d72ae5398e839ac2bdcccf323fca79';
            width: 16;
            height: 16;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/v1mxw8i6wnf51_Heartwarming.png?width=32\u0026height=32\u0026auto=webp\u0026s=e730f68de038499700c6301470812c29ef6a8555';
            width: 32;
            height: 32;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/v1mxw8i6wnf51_Heartwarming.png?width=48\u0026height=48\u0026auto=webp\u0026s=8d7c7fa22e6ff3b1b0a347839e42f493eb5f6cbc';
            width: 48;
            height: 48;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/v1mxw8i6wnf51_Heartwarming.png?width=64\u0026height=64\u0026auto=webp\u0026s=11ec2a72e2724017bb8479639edce8a7f2ba64f4';
            width: 64;
            height: 64;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/v1mxw8i6wnf51_Heartwarming.png?width=128\u0026height=128\u0026auto=webp\u0026s=1e936ae571e89abb5a5aaa2efd2d7cfb0ed1b537';
            width: 128;
            height: 128;
          }
        ];
        icon_format: 'PNG';
        award_sub_type: 'GLOBAL';
        penny_price: 0;
        award_type: 'global';
        static_icon_url: 'https://i.redd.it/award_images/t5_22cerq/v1mxw8i6wnf51_Heartwarming.png';
      },
      {
        giver_coin_reward: 0;
        subreddit_id: null;
        is_new: boolean;
        days_of_drip_extension: 0;
        coin_price: 100;
        id: 'award_74fe5152-7906-4991-9016-bc2d8e261200';
        penny_donate: 0;
        coin_reward: 0;
        icon_url: 'https://i.redd.it/award_images/t5_22cerq/x069ow7ewnf51_Excited.png';
        days_of_premium: 0;
        icon_height: 2048;
        tiers_by_required_awardings: null;
        resized_icons: [
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/x069ow7ewnf51_Excited.png?width=16\u0026height=16\u0026auto=webp\u0026s=094da86916604f4fc9f7f63c827e31c976f00928';
            width: 16;
            height: 16;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/x069ow7ewnf51_Excited.png?width=32\u0026height=32\u0026auto=webp\u0026s=52886a42b9871ec69a4465609472a864dbab27b1';
            width: 32;
            height: 32;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/x069ow7ewnf51_Excited.png?width=48\u0026height=48\u0026auto=webp\u0026s=63a8f5eff627778a221c58daffbfbbb87b7fe350';
            width: 48;
            height: 48;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/x069ow7ewnf51_Excited.png?width=64\u0026height=64\u0026auto=webp\u0026s=da0d9de08517646db45b766dbb0e7b94d2e97312';
            width: 64;
            height: 64;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/x069ow7ewnf51_Excited.png?width=128\u0026height=128\u0026auto=webp\u0026s=58d3501a4314be9d47349a1f7925e18f30a832e5';
            width: 128;
            height: 128;
          }
        ];
        icon_width: 2048;
        static_icon_width: 2048;
        start_date: null;
        is_enabled: true;
        awardings_required_to_grant_benefits: null;
        description: "I don't know what to do with my hands!";
        end_date: null;
        subreddit_coin_reward: 0;
        count: 10;
        static_icon_height: 2048;
        name: 'Excited';
        resized_static_icons: [
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/x069ow7ewnf51_Excited.png?width=16\u0026height=16\u0026auto=webp\u0026s=094da86916604f4fc9f7f63c827e31c976f00928';
            width: 16;
            height: 16;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/x069ow7ewnf51_Excited.png?width=32\u0026height=32\u0026auto=webp\u0026s=52886a42b9871ec69a4465609472a864dbab27b1';
            width: 32;
            height: 32;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/x069ow7ewnf51_Excited.png?width=48\u0026height=48\u0026auto=webp\u0026s=63a8f5eff627778a221c58daffbfbbb87b7fe350';
            width: 48;
            height: 48;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/x069ow7ewnf51_Excited.png?width=64\u0026height=64\u0026auto=webp\u0026s=da0d9de08517646db45b766dbb0e7b94d2e97312';
            width: 64;
            height: 64;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/x069ow7ewnf51_Excited.png?width=128\u0026height=128\u0026auto=webp\u0026s=58d3501a4314be9d47349a1f7925e18f30a832e5';
            width: 128;
            height: 128;
          }
        ];
        icon_format: 'PNG';
        award_sub_type: 'GLOBAL';
        penny_price: 0;
        award_type: 'global';
        static_icon_url: 'https://i.redd.it/award_images/t5_22cerq/x069ow7ewnf51_Excited.png';
      },
      {
        giver_coin_reward: 0;
        subreddit_id: null;
        is_new: boolean;
        days_of_drip_extension: 0;
        coin_price: 80;
        id: 'award_8352bdff-3e03-4189-8a08-82501dd8f835';
        penny_donate: 0;
        coin_reward: 0;
        icon_url: 'https://i.redd.it/award_images/t5_22cerq/niiatoknifn51_Hugz.png';
        days_of_premium: 0;
        icon_height: 2048;
        tiers_by_required_awardings: null;
        resized_icons: [
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/niiatoknifn51_Hugz.png?width=16\u0026height=16\u0026auto=webp\u0026s=85b1aa61933f163dd2b77b1e78f4d82d9c947ec1';
            width: 16;
            height: 16;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/niiatoknifn51_Hugz.png?width=32\u0026height=32\u0026auto=webp\u0026s=67935636337b07ca5b98d945f4bcdae26e5f567e';
            width: 32;
            height: 32;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/niiatoknifn51_Hugz.png?width=48\u0026height=48\u0026auto=webp\u0026s=547d5fb33f5a4a5d6fc154cbd658638cc2b1c3a0';
            width: 48;
            height: 48;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/niiatoknifn51_Hugz.png?width=64\u0026height=64\u0026auto=webp\u0026s=e17bc331183e7ba194314a34e43b35460a835fff';
            width: 64;
            height: 64;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/niiatoknifn51_Hugz.png?width=128\u0026height=128\u0026auto=webp\u0026s=1b4e617f18af8d4e2c47c2f154d4422be43c809f';
            width: 128;
            height: 128;
          }
        ];
        icon_width: 2048;
        static_icon_width: 2048;
        start_date: null;
        is_enabled: true;
        awardings_required_to_grant_benefits: null;
        description: 'Everything is better with a good hug';
        end_date: null;
        subreddit_coin_reward: 0;
        count: 5;
        static_icon_height: 2048;
        name: 'Hugz';
        resized_static_icons: [
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/niiatoknifn51_Hugz.png?width=16\u0026height=16\u0026auto=webp\u0026s=85b1aa61933f163dd2b77b1e78f4d82d9c947ec1';
            width: 16;
            height: 16;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/niiatoknifn51_Hugz.png?width=32\u0026height=32\u0026auto=webp\u0026s=67935636337b07ca5b98d945f4bcdae26e5f567e';
            width: 32;
            height: 32;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/niiatoknifn51_Hugz.png?width=48\u0026height=48\u0026auto=webp\u0026s=547d5fb33f5a4a5d6fc154cbd658638cc2b1c3a0';
            width: 48;
            height: 48;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/niiatoknifn51_Hugz.png?width=64\u0026height=64\u0026auto=webp\u0026s=e17bc331183e7ba194314a34e43b35460a835fff';
            width: 64;
            height: 64;
          },
          {
            url: 'https://preview.redd.it/award_images/t5_22cerq/niiatoknifn51_Hugz.png?width=128\u0026height=128\u0026auto=webp\u0026s=1b4e617f18af8d4e2c47c2f154d4422be43c809f';
            width: 128;
            height: 128;
          }
        ];
        icon_format: 'PNG';
        award_sub_type: 'GLOBAL';
        penny_price: 0;
        award_type: 'global';
        static_icon_url: 'https://i.redd.it/award_images/t5_22cerq/niiatoknifn51_Hugz.png';
      }
    ];
    awarders: [];
    media_only: boolean;
    can_gild: true;
    spoiler: boolean;
    locked: boolean;
    author_flair_text: ':flag-nc: North Carolina';
    treatment_tags: [];
    visited: boolean;
    removed_by: null;
    num_reports: null;
    distinguished: null;
    subreddit_id: 't5_2cneq';
    mod_reason_by: null;
    removal_reason: null;
    link_flair_background_color: '';
    id: 'j93r95';
    is_robot_indexable: true;
    num_duplicates: 6;
    report_reasons: null;
    author: 'trifecta';
    discussion_type: null;
    num_comments: 953;
    send_replies: true;
    media: null;
    contest_mode: boolean;
    author_patreon_flair: boolean;
    author_flair_text_color: 'dark';
    permalink: '/r/politics/comments/j93r95/jaime_harrison_shatters_senate_fundraising_record/';
    whitelist_status: 'all_ads';
    stickied: boolean;
    url: 'https://www.politico.com/news/2020/10/11/jaime-harrison-shatters-senate-fundraising-record-for-south-carolina-race-428541';
    subreddit_subscribers: 6689361;
    created_utc: 1602415398.0;
    num_crossposts: 2;
    mod_reports: [];
    is_video: boolean;
  };
}

export interface IRedditCommentsResponseItem {
  kind: 'Listing';
  data: {
    modhash: string;
    dist: string | null;
    after: string | null;
    before: string | null;
  };
}

export type TRedditCommentsResponse = IRedditCommentsResponseItem[];
