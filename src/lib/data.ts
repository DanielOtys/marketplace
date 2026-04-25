// Placeholder data for the home feed.
// When you connect Supabase later, replace these with database queries.

export type Story = {
  id: string;
  username: string;
  avatarUrl: string;
  hasUnseenStory: boolean;
  isLive?: boolean;
};

export type Post = {
  id: string;
  type: "single" | "collection";
  shopName: string;
  shopAvatarUrl: string;
  location?: string;
  timeAgo: string;
  caption: string;
  likes: number;
  comments: number;
  // For single-image posts
  imageUrl?: string;
  imageAlt?: string;
  // For collection posts
  collectionItems?: {
    imageUrl: string;
    imageAlt: string;
    price: string;
  }[];
};

export type TrendingProduct = {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
};

export type SuggestedShop = {
  id: string;
  name: string;
  avatarUrl: string;
};

export const stories: Story[] = [
  {
    id: "1",
    username: "You",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXA-xv0FFRaJUW7gmWetamnwrOYv9IN0qkJurZg_qdUctFf28s0r-m7poGERgLJmGYjxV6KVbeLSXlk5y3No7Su74YMd9YtQ1kLTXddmNFPOqJTCezCSY17hhVc0PORPavTCQTJ6GU9jEpiOLOpaT-5ag3Tdccxuj3lg7W0lIIBMHN862fz2JKKD7Yqox9tmMv6KUQs_PdKnGZBz8pATL3oIkYoCiHULLU1CVSzYhc7JmND_9y0qWOQMLZfWoKhpML4epo2gVylUM",
    hasUnseenStory: false,
  },
  {
    id: "2",
    username: "Studio_K",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5McA1HtDFYoDBlUSUG76roFz9jqhs02FmMiGB337zODEG1n5rlnroP1GMbF83L3XK8bmG7KLl9vtIMh4Kn8Rip4BT9Gx_C46DeL8vDQprpeao3DlEJtQSVo_mc3G_BiwaqnZUt3bjW-1VCdcH20b12S6YBidYVasxGm8U8a9EuAdg86WKwMPeBBv9kogA3VRo_wHVcHHecBK2oJ0aDSPZyPFW_L-Q8IFustaMQ0uVPWzC7ZQaSMHwHHcwkdSLsahN0awHmfARI6k",
    hasUnseenStory: true,
  },
  {
    id: "3",
    username: "Minimalist",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDW9uN0d0ju4Va30YxZMubhJdDg5CDZVvq0hhJ_BNl24XMCpTIi3U-xdIVIuBx0D1plPI4YatPsMX09fiNRG6Ibv_nnaTIWv2k7FP-dn7bGseHOrFU_Y-xyneWAcH5M1-Y4Ik9FtLsxQ7b3BCGHuBJC3GYiYk8g3sbh4LAakiykOgZqYqSYQ--00t7RZTF9lG2DotV22ptfIVPWEle2gRci2W2KIMrweawTDbDbtK_mHvwfVKGnLtUTXsu58UNoDJMOFgvKt3xEq2Y",
    hasUnseenStory: true,
  },
  {
    id: "4",
    username: "Editorial",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgt2TI41oqlGgHH1Zt4ssbVpBFqIFaI-JW-VWKZ2sbNIf3xU_V8JuDLIFwMhM10pEY8zKVXj67dmq7xjAG2GheKTkoTCbspyp9D74nNVTIXRRmhXzPWY1oDLiFxhtO-M5bA-MTz-I84iXA0UZEU-wkYruF46MV-YyZRrB3PhKCAqHoBqJV9RxqNxdh7XMFAyp366a7WG6h4kYMb91MQHz6ott4uKarqyFDw-x2CKbCuYumdAjfOt1yqJOj9HGbOqDQjPAFN75b0ec",
    hasUnseenStory: true,
  },
];

export const posts: Post[] = [
  {
    id: "1",
    type: "single",
    shopName: "Marcus Aris",
    shopAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZczY2ky795x_EtLiJkHwsplJ88arbeLiWQK9jW92zpXWtTeJYtGU4E9J2YAP_Kk2n0PrxAQLHbEALlbbE_k7PxzjESPGySYFc1oW8s4mRG9h6l4Os-A6AR8AzelWdjdg2OWSTQ_OviShPhlTiPbCsuKYaMEEJCw3o9bi_r82bwL3VbxZoStXJfAl9OLsl0TPXZDaZu8AS7TOWIUoyjwriEYRWd8rgPMLciBloZx4zNRIPPIpbZMseK_l5oL3iSkUNa9d561r47X4",
    location: "London, UK",
    timeAgo: "2h ago",
    caption:
      "New curated drop: The Heritage Collection is now live. Exploring the intersection of craftsmanship and modern utility. #Curated #LuxuryLeather",
    likes: 1204,
    comments: 47,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCs2byNdo23igowHsxwZgDyo4vdp5RyPRb6vWKJRlguvViAyP0V0rYq6zll8HOqZ24sZsd_-EQgyNGZu179oWWBkH4Eww73dGWrr8nIm6Kja_liYTsQGb8w7-mzfFh8AUJGXJ_Qan2RkecBvE4dyJ1vjuvgi6T_efUL6AaHQI2uacy4bhY9EyT2rTY4t0TxmSoX5b1yWs38CBlrT7viK_Xc-HcoX0j27wmHAMPJk9jISGXE0o9xC3lmK8EC0wbJcb4yfZ06_4-TTwE",
    imageAlt:
      "Artistic high-angle shot of designer leather bags arranged on a textured stone surface with deep shadows",
  },
  {
    id: "2",
    type: "collection",
    shopName: "Essential Studio",
    shopAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5R02JECzdFwAWdWXXzy5-NqUzkIL7imMK0DtRvgcw51u4ChpFkPVH1Q5VtNYZaU1Up8kuWh91uxvDVpN2bYYCFjn5TBl8cWErH4rvPgnXh7l9dcZBFVydyVilqsSzzuKZk-Uhpo6VNTquRE_IW18DXSI5ezeoDArV2TG4SNzML4PMYgaOWLV6q-keF9m3xN5DgWbU-71Aj1wm-ZisKJ6u1cv-eeZYtgwTCCW4Zn1eYB2GMySQnbaqwF7HNz0ydNsLlqNixgKajWU",
    timeAgo: "5h ago",
    caption: "Essential Studio Collection",
    likes: 832,
    comments: 21,
    collectionItems: [
      {
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAhQVS5q_6O32QizBxj19bBhrB8hvg0tq4yWpflV17e7YoRSAdZId7BPCPq-8BTDfL6nhbVMgramVMU7PnLZsR91HPGxS6qLpUKJHYlxhU7FGnbvXAxRojdETIDd7zqOPqycPYOQWpW6V4epjtpVFJsDcseK2T6XwfiBp4uTDQszTGiMInNknVGOOKXIPboT3-g6Hv1GbjZTja_efU6xKLQyB9y8xp4JLqkO5vsycnDYb1iaRac98X2o-gQ3osngZ-TgWJQR6qawmA",
        imageAlt:
          "Clean minimalist white t-shirt on a bright background with subtle shadows",
        price: "$45.00",
      },
      {
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDbncLdrFm6_iFx0FvSBCX_5dwQMwpV0d_RObedyw10EBMjcD0_m2sRctLUftpv70-Wykpd7bkD68mZfscV09vobp0EwyN_lr4WKaQObVfYwg09xH9sn1_8hAa_1B7mcZzxKPCl2lf0vBXaNVm0J33kLitHeRcHDraQRYatlcIACTpTHAB31Hbu7deOuAlOsYtSZzyGir7hhXaD8ZuvROfc7xReafFfONUPO1atNtPIRB2uZjdCa3n8vmcPjzHqz6QRE-oafrnPoIA",
        imageAlt:
          "Textured navy blue knit sweater hanging on a sleek modern wooden hanger",
        price: "$120.00",
      },
      {
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAiIvTQ2kGVbqkrJNyu6ZdHY-FYoL5NOagOZ-xLcA4u2hNL9phfp503Mre8LB5UW-mjBN42ka36_x48ljs8GyEXUlCSl7wdzcARau3dyj9Cri8x0_RcIiJ1VK64bie7YSuYlpbvooFNdodDL4j9IeVXpzs3TSyyFjCP42eX4uE48b5ekebL34jPaD-dnPjbjKxID1fsjqzD-Rr_dtx2H7YpbiISytKA4r_OkAZkcK0UemyVHto-71PCpyOZF-2mXqsqPH7qafrBTxQ",
        imageAlt:
          "A pair of luxury high-waisted tailored trousers in beige wool",
        price: "$185.00",
      },
    ],
  },
];

// Mobile vertical feed posts (full-screen TikTok style)
export type MobileFeedPost = {
  id: string;
  shopName: string;
  shopAvatarUrl: string;
  caption: string;
  imageUrl: string;
  imageAlt: string;
  likes: string;
  comments: string;
  hashtags?: string[];
};

export const mobileFeedPosts: MobileFeedPost[] = [
  {
    id: "1",
    shopName: "Sienna.K_",
    shopAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFC8d5QBoVwtZldpChwTNjInI0SsgZsojxk9AmZP2hPyR525rCQiQntLHAGsYPFft0QkjvL4sl64by2dlBlrhQQ9cSN77sMGOSeywFpzyKrbBaqgB1ttqp9eWW4nQ1QkHuF_jVBtF8pTmbc3X3J6_9IV4GD043v9e4ZifQ2aKWNEOW2zb4WE312qeRmxmdIjGMj_9wQF7TjH-q5VliYMLG24IicSpdv-RfvbwSNYzhl5a5RVhAgVmE6n1cAqrV7HyodAT5ygQ55nQ",
    caption:
      "The Obsidian Bag. Limited drop starting this Friday. Crafted from Italian calf leather. #luxury #editorial",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjdULXczShor-b0DftFjMQjPxEybijNs8HYRVBkG7dvfHTM9ge59pyjVEbTGu3wd6IQ9KKaUdXaNuDUtjXiRae6t8nzRV4DcP_f0ZpBsPaHjw7QmZfDmtENA2sIc2UPuJWqOGJ7R3zHfvz5JVxGJCwlxGVbFOynMDfdQadmxpIdWGXHyUQnxKS_M3ylVouZvacz89tU2xN3I-ps4mzTH4bWIm9N55kyr5bcjpWARvk257Kp5Xb_8KjRfaV2t4Hs8YY32RwjVBx04I",
    imageAlt:
      "A vertical cinematic shot of a modern leather handbag sitting on a marble table in a luxury apartment",
    likes: "12k",
    comments: "458",
    hashtags: ["#leather", "#newdrop"],
  },
  {
    id: "2",
    shopName: "Vogue_Artisan",
    shopAvatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTJMM6wc9muyJHOemkSfb5vW1nSXboDUrn4qWbM2F9yCDk4msbn1VX0n1w39sqaeb1zTgcbdYMmIxd9U6ar1_a3VUle90PhpBv498D7Q1i_OEi4_Cd0BwzV3h8QzmkM7prKz_LYq4SuIWLzo5RChwWhB5CHzCStLceFMJvBT8JtvBk1MOOtO0BAjVtgPrdEaIt39N0oiWHbe3nIVm8KYeO_BAgonjRz9747p7F-g-xWzB7BgmhWi9gntGDV0Hu-0mtvPHGIgdg02k",
    caption:
      "Summer Solstice Collection preview. Pure linen. Pure freedom.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAecCZuOGTgU-V8fsz0_laVT6S8CvPFW9eyfmxwgU35I1xuc_Y-JKC6OEf9N_owo_kDzKdZAnI7kJrT2q6BwlsroV7kgp4YNDns3LGM0mumM6KBBhkbe9SD9UfgoZrGkQrDdLIETXAJsOOVVoM-iFh82B0EYPeXohtjCmnyq0NpAXSKM6JTpBP1-lCvxFwHZX_lToQNNwrnyLDj7nx5Lv1GrRfG7Zbf0M_Yetl3d3Ik69NrHuUFcnLPu1_tu-QIx4BDPgnWYBNT2T8",
    imageAlt:
      "Vertical fashion photography of a model walking through a sun-drenched coastal town wearing flowing white fabrics",
    likes: "8.4k",
    comments: "203",
  },
];

export const mobileStories: Story[] = [
  {
    id: "1",
    username: "You",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHLI8wJWVdtMm4dx5YqzFm3m3Zu5Ga9nzuztOmv2WkvTjxpKho0i3rNLxClXn1XOSGxXDgmIFqFzOyXdYkJk2Ghi9aUFP0dGIZEMuSbjs_U59OtRyMb6NfU9RS2kl5XysaEDtp6xm8N3iPXtYmS8HxjalHQj08B-s0cYgQigVKIuooVTE-rEFxLt7oX4Na9mfMwJJ-4_byk5PeOsZt6UOQiybmqZSKKKwfcwvBMfuPlsnhFas4KNf9YXKFlAe6yNfjZt_fLVoYR1Q",
    hasUnseenStory: false,
  },
  {
    id: "2",
    username: "Studio_K",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgpbkye0fOr3D9sED_3y3S1IDyqC9GVzgTxLhcsJDYAYMoNBVGX78VpiPNl5DiE8IPpOniagAlI-trLjruvFqlnsaQk6Xr3hMRNWhTVKbS06D9uplseIcj1pmU-vO6yCFz45Zqbc7HLikvliwcVZWb_6UDlnxPaBOioio4NMQGlVqHeU5tPot_4OrfSjohAWX07KQL-KjR7Wf38GUwUQUBVcOaFj7_HgdOYX7Rv_63Eh05ZDS46QFzdFTpCQ_p3G1u1DVXktzbjx4",
    hasUnseenStory: true,
  },
  {
    id: "3",
    username: "Minimalist",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArZEYcDciRJKe9fRboj-MbOosUheorAm_8Nzkeq_KQGDhf6mWoNabPdCiNhpBRCBPM3963SfOndmwVrXfwv2aB_qbvSjTCM2t6WsaY43PIEFbiRvjKlywAuQN04A5bBm9ecyUDREfRCY_VEDUGuFo4RsP__YrbEqfOk5rBD-QTut-B2ET5LsrYnaLBqlTKpVYhXrOzxgfhoDg0sfxHmyWWuzpztdE8Q20EF9puZvE4Adp5rjnIT3qYAv9RocVQdFT_IM_QbyQ228A",
    hasUnseenStory: true,
  },
  {
    id: "4",
    username: "Editorial",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdaGMyJ29EjzCbaydTttuy050Etc_jOM8qmeFLnszVbrRXrpBX-nxFVTEaxKkwTNiUhRmvgDRsVRHzcdh-5t8bPrURFaiEiMhag6wRMjN5P6pa5o97WdvYvlgOxftHw7rAXQa-OISUcNaBxZ_X7eglByFofZE1AlYjAQ3hTdseDECQ3mFxaRzCk18UufF5L0AtaZb3DS-GbvC0nOa1Em7v0__19lZj0-yAJ77J6Gob1gh1jGbv9m7mL5wjG7iPOJzNJe-qOWjFfF0",
    hasUnseenStory: true,
  },
];

export const trendingProducts: TrendingProduct[] = [
  {
    id: "1",
    name: "Aero-Max Runner",
    price: "$159.00",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPjeGbdu3t6N2hzxUt-K_yX9TB7FN6I-gy4KrK53dLODlQFNzt3gvti_DfALjQFvwez5pedUqQ5wazuTnKROKEYW0Iqpg7tZelLvd8pgAn3jQ5fEaWxwL7U-jQahhUHBBOfAvzfn7_7Sglj5txMggvodt2VJavR9XSMqE4tHCfYfxEueS9bO3xKgCWMDDQJbIKLaSdagj_ZIl2qq5nxcsB4ZUWPFFiG6LQ5yEM5snQXrvaqN36izzIIf79iJi9Bx7Ev8AXAczW21Y",
    imageAlt: "Vibrant red athletic sneakers on a clean white background",
  },
  {
    id: "2",
    name: "Nova Chrono Silver",
    price: "$299.00",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNK9aOMDCRlLY_znbaAJjtW6w_utBDisSr5L-nToBMqHSUijIB7vS5WkhU1ZTTd0TnpFkc4y3f6n4SCo3SlqjnPMudCXIuODs8eYJbHheYV2IaqLHNuEKMb0-Mm2rZFaCPTKw7vqKnq4iZwFQzYYqfeNYaQUSR6SCII82ascIvYJnFQT88lgJVaHfOreSMpsqhJE5Ahvr4Mp5RMOYF64Ndo4mxA1HN0whvrtE3LUa0Z3vr9mk5FXaVOIbrCKoqQef1LrTYp-R50NM",
    imageAlt:
      "Minimalist luxury wristwatch with a white face and gold detailing",
  },
];

export const suggestedShops: SuggestedShop[] = [
  {
    id: "1",
    name: "Studio_V",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxEGUO7oIqEDElntlMeHsMFPAXq9nO17dsw68UAIstVJf6L7ILatAUqdhoBPce5ve1ThqGBuQdQw-z_o0Uy1kRKL4H_wQd_jLD2tQ9SvRrZUXF7dbynRCGHvdiJH0-YgynANMBCOKgNfdf3awPXg1E6mLca0KmU-SZKTVy1B9E1zA2pPvLPJ0M_Pk-grXFXrYse-ruGW1gC3t695KWkqZQeOLehpTVgFCA1EDcbyAM0EiOyaU-n-n_Tg8hbk344mrBBjTWKsgBJow",
  },
  {
    id: "2",
    name: "Luna_Artisan",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCRjrr_4E5ZSKl0-SQpdQn5Kw1yuUYGyvA5wqekq2heKjh2OdwjTWG7FiMXSVtXTXierVJVJ-nT1Q9gHkaS8TjyGSiBhPRVs9URHtpjBtnEQdipt9CWDccjl6QzaD_EdMG78QQT_5dH6zmEVQa8-pDnFh_chL1Zme07IQBa4348WiHSJuANGMwXOAM3myxy2PBNn3Q5g9VSriXozFdq03bW5y-ZMcAC__RiGl7fhPOZGLKBfbE1JX9ZFobYVNLkN7RNN-tGrHKds8",
  },
];
