export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg";

export const PHOTO_URL = "https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRPhDNbxfvPHVFP56kT7oI1DpyMjd14ix52RDF7o8qn9Zy8UboO5MeYaz1IeUEr1w7sih47wXzwyVWIxuNjXAcapQE4T-cU.png?r=7c7";


export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' + process.env.REACT_APP_TMDB_KEY
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";


export const SUPPORTED_LANGUAGES=[
  {identifier:"en", name: "English"},
  {identifier:"hindi",name: "Hindi"},
  {identifier:"spanish", name:"Spanish"}
];


// export const OPENAI_KEY = "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"


export const ANTHROPIC_API_KEY = process.env.REACT_APP_ANTHROPIC_API_KEY

// export const ANTHROPIC_API_KEY="AIzaSyA8cScHhiz9jNZohViRjtWjbqwWjNJwuMc"