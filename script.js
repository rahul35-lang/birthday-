/* ==========================================================================
   ROMANTIC BIRTHDAY EXPERIENCE - JAVASCRIPT ENGINE
   Dedicated to Rahul's Girlfriend • 17th Birthday • October 10
   ========================================================================== */

(function () {
  'use strict';

  // --- EMBEDDED MEDIA DATABASE ---
  const MEDIA_DATA = {
  "us": {
    "images": [
      {
        "file": "2e2bd384-9235-4b35-ab3d-1f5a443dbcb3.jpg",
        "src": "assets/us/images/2e2bd384-9235-4b35-ab3d-1f5a443dbcb3.jpg",
        "thumb": "assets/us/thumbs/2e2bd384-9235-4b35-ab3d-1f5a443dbcb3.jpg",
        "width": 1125,
        "height": 1500,
        "aspect": 0.75
      },
      {
        "file": "IMG_0124.PNG",
        "src": "assets/us/images/IMG_0124.PNG",
        "thumb": "assets/us/thumbs/IMG_0124.PNG",
        "width": 828,
        "height": 1792,
        "aspect": 0.46
      },
      {
        "file": "eb66aff0-cf5e-4d43-a386-b836ccdfaa3d.jpg",
        "src": "assets/us/images/eb66aff0-cf5e-4d43-a386-b836ccdfaa3d.jpg",
        "thumb": "assets/us/thumbs/eb66aff0-cf5e-4d43-a386-b836ccdfaa3d.jpg",
        "width": 1200,
        "height": 1600,
        "aspect": 0.75
      }
    ],
    "videos": [
      {
        "file": "2090f1fc-fbcf-49bd-9333-efec9857a80c.mp4",
        "src": "assets/us/videos/2090f1fc-fbcf-49bd-9333-efec9857a80c.mp4",
        "poster": "assets/us/thumbs/2090f1fc-fbcf-49bd-9333-efec9857a80c_poster.jpg"
      }
    ]
  },
  "hers": {
    "images": [
      {
        "file": "0433ad64-095c-4161-9601-49aa8886c0f9.jpg",
        "src": "assets/hers/images/0433ad64-095c-4161-9601-49aa8886c0f9.jpg",
        "thumb": "assets/hers/thumbs/0433ad64-095c-4161-9601-49aa8886c0f9.jpg",
        "width": 720,
        "height": 941,
        "aspect": 0.77
      },
      {
        "file": "04f17abc-d9a8-4842-9791-b7574d16a60c.jpg",
        "src": "assets/hers/images/04f17abc-d9a8-4842-9791-b7574d16a60c.jpg",
        "thumb": "assets/hers/thumbs/04f17abc-d9a8-4842-9791-b7574d16a60c.jpg",
        "width": 1080,
        "height": 1920,
        "aspect": 0.56
      },
      {
        "file": "0ab8f2f7-a291-462d-b063-42892836f2a2.jpg",
        "src": "assets/hers/images/0ab8f2f7-a291-462d-b063-42892836f2a2.jpg",
        "thumb": "assets/hers/thumbs/0ab8f2f7-a291-462d-b063-42892836f2a2.jpg",
        "width": 720,
        "height": 1280,
        "aspect": 0.56
      },
      {
        "file": "0d377784-144f-4f78-801c-91b235cade52.jpg",
        "src": "assets/hers/images/0d377784-144f-4f78-801c-91b235cade52.jpg",
        "thumb": "assets/hers/thumbs/0d377784-144f-4f78-801c-91b235cade52.jpg",
        "width": 720,
        "height": 1280,
        "aspect": 0.56
      },
      {
        "file": "1cb6829c-4726-497a-bbaa-34ce7a71840b.jpg",
        "src": "assets/hers/images/1cb6829c-4726-497a-bbaa-34ce7a71840b.jpg",
        "thumb": "assets/hers/thumbs/1cb6829c-4726-497a-bbaa-34ce7a71840b.jpg",
        "width": 1200,
        "height": 1600,
        "aspect": 0.75
      },
      {
        "file": "230a3068-a144-4074-a0c6-c25664664dbc.jpg",
        "src": "assets/hers/images/230a3068-a144-4074-a0c6-c25664664dbc.jpg",
        "thumb": "assets/hers/thumbs/230a3068-a144-4074-a0c6-c25664664dbc.jpg",
        "width": 720,
        "height": 1280,
        "aspect": 0.56
      },
      {
        "file": "2736e2c5-a237-4b7b-92b1-b85c90f4aeba.jpg",
        "src": "assets/hers/images/2736e2c5-a237-4b7b-92b1-b85c90f4aeba.jpg",
        "thumb": "assets/hers/thumbs/2736e2c5-a237-4b7b-92b1-b85c90f4aeba.jpg",
        "width": 1296,
        "height": 968,
        "aspect": 1.34
      },
      {
        "file": "28a65870-4051-4158-a660-20df784499a8.jpg",
        "src": "assets/hers/images/28a65870-4051-4158-a660-20df784499a8.jpg",
        "thumb": "assets/hers/thumbs/28a65870-4051-4158-a660-20df784499a8.jpg",
        "width": 899,
        "height": 1599,
        "aspect": 0.56
      },
      {
        "file": "2f332f4b-1e7c-4787-bca3-4bf2da035972.jpg",
        "src": "assets/hers/images/2f332f4b-1e7c-4787-bca3-4bf2da035972.jpg",
        "thumb": "assets/hers/thumbs/2f332f4b-1e7c-4787-bca3-4bf2da035972.jpg",
        "width": 1296,
        "height": 968,
        "aspect": 1.34
      },
      {
        "file": "36066bc0-5ff2-4e67-bd16-187f554e501c.jpg",
        "src": "assets/hers/images/36066bc0-5ff2-4e67-bd16-187f554e501c.jpg",
        "thumb": "assets/hers/thumbs/36066bc0-5ff2-4e67-bd16-187f554e501c.jpg",
        "width": 947,
        "height": 1296,
        "aspect": 0.73
      },
      {
        "file": "367f3f06-a77d-4cc8-b387-26adde7c6e97.jpg",
        "src": "assets/hers/images/367f3f06-a77d-4cc8-b387-26adde7c6e97.jpg",
        "thumb": "assets/hers/thumbs/367f3f06-a77d-4cc8-b387-26adde7c6e97.jpg",
        "width": 1170,
        "height": 1560,
        "aspect": 0.75
      },
      {
        "file": "3982cc5b-32d4-44a2-81ad-09f6aac21f80.jpg",
        "src": "assets/hers/images/3982cc5b-32d4-44a2-81ad-09f6aac21f80.jpg",
        "thumb": "assets/hers/thumbs/3982cc5b-32d4-44a2-81ad-09f6aac21f80.jpg",
        "width": 968,
        "height": 1296,
        "aspect": 0.75
      },
      {
        "file": "3caf35f0-6b90-4844-a6d8-948d49cf3c71.jpg",
        "src": "assets/hers/images/3caf35f0-6b90-4844-a6d8-948d49cf3c71.jpg",
        "thumb": "assets/hers/thumbs/3caf35f0-6b90-4844-a6d8-948d49cf3c71.jpg",
        "width": 720,
        "height": 1280,
        "aspect": 0.56
      },
      {
        "file": "3df5607e-782a-4050-a452-a957fdc41695.jpg",
        "src": "assets/hers/images/3df5607e-782a-4050-a452-a957fdc41695.jpg",
        "thumb": "assets/hers/thumbs/3df5607e-782a-4050-a452-a957fdc41695.jpg",
        "width": 1080,
        "height": 1134,
        "aspect": 0.95
      },
      {
        "file": "40507839-ad43-4fb1-901a-c33f560a2e12.jpg",
        "src": "assets/hers/images/40507839-ad43-4fb1-901a-c33f560a2e12.jpg",
        "thumb": "assets/hers/thumbs/40507839-ad43-4fb1-901a-c33f560a2e12.jpg",
        "width": 3088,
        "height": 2320,
        "aspect": 1.33
      },
      {
        "file": "4108f4e4-5057-40e4-befe-83ec57473554.jpg",
        "src": "assets/hers/images/4108f4e4-5057-40e4-befe-83ec57473554.jpg",
        "thumb": "assets/hers/thumbs/4108f4e4-5057-40e4-befe-83ec57473554.jpg",
        "width": 720,
        "height": 960,
        "aspect": 0.75
      },
      {
        "file": "4169459b-8925-4a49-984b-28915544423d.jpg",
        "src": "assets/hers/images/4169459b-8925-4a49-984b-28915544423d.jpg",
        "thumb": "assets/hers/thumbs/4169459b-8925-4a49-984b-28915544423d.jpg",
        "width": 899,
        "height": 1599,
        "aspect": 0.56
      },
      {
        "file": "43e631c9-4c44-451e-bd36-6b32ce192fa5.jpg",
        "src": "assets/hers/images/43e631c9-4c44-451e-bd36-6b32ce192fa5.jpg",
        "thumb": "assets/hers/thumbs/43e631c9-4c44-451e-bd36-6b32ce192fa5.jpg",
        "width": 968,
        "height": 1296,
        "aspect": 0.75
      },
      {
        "file": "43ee009d-b408-400e-bd2d-2fd69b21abd1.jpg",
        "src": "assets/hers/images/43ee009d-b408-400e-bd2d-2fd69b21abd1.jpg",
        "thumb": "assets/hers/thumbs/43ee009d-b408-400e-bd2d-2fd69b21abd1.jpg",
        "width": 1318,
        "height": 1600,
        "aspect": 0.82
      },
      {
        "file": "47d5022c-05f2-401f-b6d8-ab87a400398f.jpg",
        "src": "assets/hers/images/47d5022c-05f2-401f-b6d8-ab87a400398f.jpg",
        "thumb": "assets/hers/thumbs/47d5022c-05f2-401f-b6d8-ab87a400398f.jpg",
        "width": 4032,
        "height": 3024,
        "aspect": 1.33
      },
      {
        "file": "54ae70f5-94b2-48f5-8805-61238493c65a.jpg",
        "src": "assets/hers/images/54ae70f5-94b2-48f5-8805-61238493c65a.jpg",
        "thumb": "assets/hers/thumbs/54ae70f5-94b2-48f5-8805-61238493c65a.jpg",
        "width": 720,
        "height": 1280,
        "aspect": 0.56
      },
      {
        "file": "6180df3b-c492-4f7e-b938-a865a7855b81.jpg",
        "src": "assets/hers/images/6180df3b-c492-4f7e-b938-a865a7855b81.jpg",
        "thumb": "assets/hers/thumbs/6180df3b-c492-4f7e-b938-a865a7855b81.jpg",
        "width": 720,
        "height": 1280,
        "aspect": 0.56
      },
      {
        "file": "64fb04f3-cc3d-4623-8eb3-6797916fcc6a.jpg",
        "src": "assets/hers/images/64fb04f3-cc3d-4623-8eb3-6797916fcc6a.jpg",
        "thumb": "assets/hers/thumbs/64fb04f3-cc3d-4623-8eb3-6797916fcc6a.jpg",
        "width": 720,
        "height": 1280,
        "aspect": 0.56
      },
      {
        "file": "65cbf018-0e02-42da-99b9-b0a30ec30498.jpg",
        "src": "assets/hers/images/65cbf018-0e02-42da-99b9-b0a30ec30498.jpg",
        "thumb": "assets/hers/thumbs/65cbf018-0e02-42da-99b9-b0a30ec30498.jpg",
        "width": 1200,
        "height": 1600,
        "aspect": 0.75
      },
      {
        "file": "6db36d75-600b-4a64-8985-23ff7ebe9ccb.jpg",
        "src": "assets/hers/images/6db36d75-600b-4a64-8985-23ff7ebe9ccb.jpg",
        "thumb": "assets/hers/thumbs/6db36d75-600b-4a64-8985-23ff7ebe9ccb.jpg",
        "width": 3024,
        "height": 4032,
        "aspect": 0.75
      },
      {
        "file": "770a00fc-f7e6-4800-8998-b3678d207c9a.jpg",
        "src": "assets/hers/images/770a00fc-f7e6-4800-8998-b3678d207c9a.jpg",
        "thumb": "assets/hers/thumbs/770a00fc-f7e6-4800-8998-b3678d207c9a.jpg",
        "width": 720,
        "height": 960,
        "aspect": 0.75
      },
      {
        "file": "7c5e3815-0ffa-4b25-9b02-1afc7afb3b9b.jpg",
        "src": "assets/hers/images/7c5e3815-0ffa-4b25-9b02-1afc7afb3b9b.jpg",
        "thumb": "assets/hers/thumbs/7c5e3815-0ffa-4b25-9b02-1afc7afb3b9b.jpg",
        "width": 720,
        "height": 968,
        "aspect": 0.74
      },
      {
        "file": "8e321e94-06a8-4f3b-a401-7bbaa08de170.jpg",
        "src": "assets/hers/images/8e321e94-06a8-4f3b-a401-7bbaa08de170.jpg",
        "thumb": "assets/hers/thumbs/8e321e94-06a8-4f3b-a401-7bbaa08de170.jpg",
        "width": 3088,
        "height": 2320,
        "aspect": 1.33
      },
      {
        "file": "8fa1ad83-ac46-44b6-81c7-70469df9331f.jpg",
        "src": "assets/hers/images/8fa1ad83-ac46-44b6-81c7-70469df9331f.jpg",
        "thumb": "assets/hers/thumbs/8fa1ad83-ac46-44b6-81c7-70469df9331f.jpg",
        "width": 899,
        "height": 1599,
        "aspect": 0.56
      },
      {
        "file": "9d4c9bf5-5055-45ab-a1a6-8a3a0592cd5e.jpg",
        "src": "assets/hers/images/9d4c9bf5-5055-45ab-a1a6-8a3a0592cd5e.jpg",
        "thumb": "assets/hers/thumbs/9d4c9bf5-5055-45ab-a1a6-8a3a0592cd5e.jpg",
        "width": 899,
        "height": 1599,
        "aspect": 0.56
      },
      {
        "file": "DF78694E-ED3E-43CA-AEED-F6E9A9C7061F.jpg",
        "src": "assets/hers/images/DF78694E-ED3E-43CA-AEED-F6E9A9C7061F.jpg",
        "thumb": "assets/hers/thumbs/DF78694E-ED3E-43CA-AEED-F6E9A9C7061F.jpg",
        "width": 612,
        "height": 816,
        "aspect": 0.75
      },
      {
        "file": "IMG_20250404_235441_810_Original.JPG",
        "src": "assets/hers/images/IMG_20250404_235441_810_Original.JPG",
        "thumb": "assets/hers/thumbs/IMG_20250404_235441_810_Original.JPG",
        "width": 612,
        "height": 816,
        "aspect": 0.75
      },
      {
        "file": "att.2U_mpfn29QAhOvso3Gkqi3yRTjmECeaR08k8vtuh9Qg.jpg",
        "src": "assets/hers/images/att.2U_mpfn29QAhOvso3Gkqi3yRTjmECeaR08k8vtuh9Qg.jpg",
        "thumb": "assets/hers/thumbs/att.2U_mpfn29QAhOvso3Gkqi3yRTjmECeaR08k8vtuh9Qg.jpg",
        "width": 256,
        "height": 960,
        "aspect": 0.27
      },
      {
        "file": "att.QzP6jDBiHIweT3TKBGy6DMKP2gThOd4EYpUx8O-miks.jpg",
        "src": "assets/hers/images/att.QzP6jDBiHIweT3TKBGy6DMKP2gThOd4EYpUx8O-miks.jpg",
        "thumb": "assets/hers/thumbs/att.QzP6jDBiHIweT3TKBGy6DMKP2gThOd4EYpUx8O-miks.jpg",
        "width": 396,
        "height": 772,
        "aspect": 0.51
      },
      {
        "file": "att.gh-rolS2K4pmf2JvAXmdYjRKHrTc5yidC0g-lZ7P9ZQ.jpg",
        "src": "assets/hers/images/att.gh-rolS2K4pmf2JvAXmdYjRKHrTc5yidC0g-lZ7P9ZQ.jpg",
        "thumb": "assets/hers/thumbs/att.gh-rolS2K4pmf2JvAXmdYjRKHrTc5yidC0g-lZ7P9ZQ.jpg",
        "width": 720,
        "height": 960,
        "aspect": 0.75
      },
      {
        "file": "b9a0b951-9fe7-4c9f-a664-6271402bc8db.jpg",
        "src": "assets/hers/images/b9a0b951-9fe7-4c9f-a664-6271402bc8db.jpg",
        "thumb": "assets/hers/thumbs/b9a0b951-9fe7-4c9f-a664-6271402bc8db.jpg",
        "width": 899,
        "height": 1599,
        "aspect": 0.56
      },
      {
        "file": "b9ea5800-52ee-488a-be4a-642147361d7b.jpg",
        "src": "assets/hers/images/b9ea5800-52ee-488a-be4a-642147361d7b.jpg",
        "thumb": "assets/hers/thumbs/b9ea5800-52ee-488a-be4a-642147361d7b.jpg",
        "width": 720,
        "height": 1424,
        "aspect": 0.51
      },
      {
        "file": "ba967560-27f0-427a-b695-f2bb36636b7e.jpg",
        "src": "assets/hers/images/ba967560-27f0-427a-b695-f2bb36636b7e.jpg",
        "thumb": "assets/hers/thumbs/ba967560-27f0-427a-b695-f2bb36636b7e.jpg",
        "width": 1080,
        "height": 1920,
        "aspect": 0.56
      },
      {
        "file": "c013fb06-ef6b-49b2-831d-09603d41f958.jpg",
        "src": "assets/hers/images/c013fb06-ef6b-49b2-831d-09603d41f958.jpg",
        "thumb": "assets/hers/thumbs/c013fb06-ef6b-49b2-831d-09603d41f958.jpg",
        "width": 968,
        "height": 1296,
        "aspect": 0.75
      },
      {
        "file": "cfd933a4-f771-4e70-a7a3-e4a3aa0de87a.jpg",
        "src": "assets/hers/images/cfd933a4-f771-4e70-a7a3-e4a3aa0de87a.jpg",
        "thumb": "assets/hers/thumbs/cfd933a4-f771-4e70-a7a3-e4a3aa0de87a.jpg",
        "width": 1296,
        "height": 968,
        "aspect": 1.34
      },
      {
        "file": "d0a9a2b3-3a52-4440-ba64-bbacce2149d2.jpg",
        "src": "assets/hers/images/d0a9a2b3-3a52-4440-ba64-bbacce2149d2.jpg",
        "thumb": "assets/hers/thumbs/d0a9a2b3-3a52-4440-ba64-bbacce2149d2.jpg",
        "width": 899,
        "height": 1599,
        "aspect": 0.56
      },
      {
        "file": "d0a9a2b3-3a52-4440-ba64-bbacce2149d21.jpg",
        "src": "assets/hers/images/d0a9a2b3-3a52-4440-ba64-bbacce2149d21.jpg",
        "thumb": "assets/hers/thumbs/d0a9a2b3-3a52-4440-ba64-bbacce2149d21.jpg",
        "width": 899,
        "height": 1599,
        "aspect": 0.56
      },
      {
        "file": "ddf7ce56-b95c-4d4e-b4d7-c80a9cb04e85.jpg",
        "src": "assets/hers/images/ddf7ce56-b95c-4d4e-b4d7-c80a9cb04e85.jpg",
        "thumb": "assets/hers/thumbs/ddf7ce56-b95c-4d4e-b4d7-c80a9cb04e85.jpg",
        "width": 720,
        "height": 960,
        "aspect": 0.75
      },
      {
        "file": "dfa686ca-f436-4876-ade3-e88f1ce739a3.jpg",
        "src": "assets/hers/images/dfa686ca-f436-4876-ade3-e88f1ce739a3.jpg",
        "thumb": "assets/hers/thumbs/dfa686ca-f436-4876-ade3-e88f1ce739a3.jpg",
        "width": 899,
        "height": 1599,
        "aspect": 0.56
      },
      {
        "file": "e52a656c-6519-4954-bd5c-bb2d3e1f4971.jpg",
        "src": "assets/hers/images/e52a656c-6519-4954-bd5c-bb2d3e1f4971.jpg",
        "thumb": "assets/hers/thumbs/e52a656c-6519-4954-bd5c-bb2d3e1f4971.jpg",
        "width": 899,
        "height": 1599,
        "aspect": 0.56
      },
      {
        "file": "eb7fd61a-399e-4c07-ab05-117b1cfc1ef2.jpg",
        "src": "assets/hers/images/eb7fd61a-399e-4c07-ab05-117b1cfc1ef2.jpg",
        "thumb": "assets/hers/thumbs/eb7fd61a-399e-4c07-ab05-117b1cfc1ef2.jpg",
        "width": 1296,
        "height": 968,
        "aspect": 1.34
      },
      {
        "file": "f2b9b556-5592-4977-a97d-79cd0ee5eaef.jpg",
        "src": "assets/hers/images/f2b9b556-5592-4977-a97d-79cd0ee5eaef.jpg",
        "thumb": "assets/hers/thumbs/f2b9b556-5592-4977-a97d-79cd0ee5eaef.jpg",
        "width": 968,
        "height": 1296,
        "aspect": 0.75
      },
      {
        "file": "f866a422-1ef4-40bd-b9e3-05a79b4ea307.jpg",
        "src": "assets/hers/images/f866a422-1ef4-40bd-b9e3-05a79b4ea307.jpg",
        "thumb": "assets/hers/thumbs/f866a422-1ef4-40bd-b9e3-05a79b4ea307.jpg",
        "width": 1198,
        "height": 1600,
        "aspect": 0.75
      },
      {
        "file": "f9efd588-a93a-450e-a129-479b8af24195.jpg",
        "src": "assets/hers/images/f9efd588-a93a-450e-a129-479b8af24195.jpg",
        "thumb": "assets/hers/thumbs/f9efd588-a93a-450e-a129-479b8af24195.jpg",
        "width": 1296,
        "height": 968,
        "aspect": 1.34
      },
      {
        "file": "fbad17c4-ca0a-41c0-80c2-cb0736f6ba35.jpg",
        "src": "assets/hers/images/fbad17c4-ca0a-41c0-80c2-cb0736f6ba35.jpg",
        "thumb": "assets/hers/thumbs/fbad17c4-ca0a-41c0-80c2-cb0736f6ba35.jpg",
        "width": 720,
        "height": 1280,
        "aspect": 0.56
      },
      {
        "file": "fd6925d2-4349-47a0-a894-17e48f56a2de.jpg",
        "src": "assets/hers/images/fd6925d2-4349-47a0-a894-17e48f56a2de.jpg",
        "thumb": "assets/hers/thumbs/fd6925d2-4349-47a0-a894-17e48f56a2de.jpg",
        "width": 720,
        "height": 962,
        "aspect": 0.75
      },
      {
        "file": "fe474d85-7285-470c-9697-bfd1db365f03.jpg",
        "src": "assets/hers/images/fe474d85-7285-470c-9697-bfd1db365f03.jpg",
        "thumb": "assets/hers/thumbs/fe474d85-7285-470c-9697-bfd1db365f03.jpg",
        "width": 718,
        "height": 1599,
        "aspect": 0.45
      },
      {
        "file": "fe8aaa06-69f4-4f82-9038-700cfc6339aa.jpg",
        "src": "assets/hers/images/fe8aaa06-69f4-4f82-9038-700cfc6339aa.jpg",
        "thumb": "assets/hers/thumbs/fe8aaa06-69f4-4f82-9038-700cfc6339aa.jpg",
        "width": 899,
        "height": 1599,
        "aspect": 0.56
      }
    ],
    "videos": [
      {
        "file": "21b3c72e-2a30-4d0d-83ff-a18c325c06b2.mp4",
        "src": "assets/hers/videos/21b3c72e-2a30-4d0d-83ff-a18c325c06b2.mp4",
        "poster": "assets/hers/thumbs/21b3c72e-2a30-4d0d-83ff-a18c325c06b2_poster.jpg"
      },
      {
        "file": "416945d9-e941-49c2-a32d-71e1159cef9e.mp4",
        "src": "assets/hers/videos/416945d9-e941-49c2-a32d-71e1159cef9e.mp4",
        "poster": "assets/hers/thumbs/416945d9-e941-49c2-a32d-71e1159cef9e_poster.jpg"
      },
      {
        "file": "548b1a6d-37d0-4f70-aa47-5b74b560a22b.mp4",
        "src": "assets/hers/videos/548b1a6d-37d0-4f70-aa47-5b74b560a22b.mp4",
        "poster": "assets/hers/thumbs/548b1a6d-37d0-4f70-aa47-5b74b560a22b_poster.jpg"
      },
      {
        "file": "5cb6eeb8-ee59-4083-b1a1-cd77c31e2263.mp4",
        "src": "assets/hers/videos/5cb6eeb8-ee59-4083-b1a1-cd77c31e2263.mp4",
        "poster": "assets/hers/thumbs/5cb6eeb8-ee59-4083-b1a1-cd77c31e2263_poster.jpg"
      },
      {
        "file": "675854e6-ff25-4b30-9e78-a8bb0c729c7b.mp4",
        "src": "assets/hers/videos/675854e6-ff25-4b30-9e78-a8bb0c729c7b.mp4",
        "poster": "assets/hers/thumbs/675854e6-ff25-4b30-9e78-a8bb0c729c7b_poster.jpg"
      },
      {
        "file": "8eded55e-a7d7-419a-a5aa-574dcff434c0.mp4",
        "src": "assets/hers/videos/8eded55e-a7d7-419a-a5aa-574dcff434c0.mp4",
        "poster": "assets/hers/thumbs/8eded55e-a7d7-419a-a5aa-574dcff434c0_poster.jpg"
      },
      {
        "file": "a97215de-b19f-4352-a8a4-f19d572b50e5.mp4",
        "src": "assets/hers/videos/a97215de-b19f-4352-a8a4-f19d572b50e5.mp4",
        "poster": "assets/hers/thumbs/a97215de-b19f-4352-a8a4-f19d572b50e5_poster.jpg"
      },
      {
        "file": "b0515b16-1fc6-49f5-8282-55598a568ca9.mp4",
        "src": "assets/hers/videos/b0515b16-1fc6-49f5-8282-55598a568ca9.mp4",
        "poster": "assets/hers/thumbs/b0515b16-1fc6-49f5-8282-55598a568ca9_poster.jpg"
      },
      {
        "file": "cfe55a0c-698a-4795-a692-bc83ec2e33e4.mp4",
        "src": "assets/hers/videos/cfe55a0c-698a-4795-a692-bc83ec2e33e4.mp4",
        "poster": "assets/hers/thumbs/cfe55a0c-698a-4795-a692-bc83ec2e33e4_poster.jpg"
      },
      {
        "file": "e0679b2f-065e-4297-a8db-69b5bc3faca8.mp4",
        "src": "assets/hers/videos/e0679b2f-065e-4297-a8db-69b5bc3faca8.mp4",
        "poster": "assets/hers/thumbs/e0679b2f-065e-4297-a8db-69b5bc3faca8_poster.jpg"
      },
      {
        "file": "f6d5842a-4cdc-4997-8b04-31f851e1c351.mp4",
        "src": "assets/hers/videos/f6d5842a-4cdc-4997-8b04-31f851e1c351.mp4",
        "poster": "assets/hers/thumbs/f6d5842a-4cdc-4997-8b04-31f851e1c351_poster.jpg"
      }
    ]
  }
};

  // 17 Sweet Reasons for 17 Years
  const REASONS = [
    { num: 1, title: "Your Radiance", text: "Your smile has this magical way of making even my darkest, heaviest days feel instantly bright." },
    { num: 2, title: "Your Genuine Heart", text: "The kindness and gentleness you carry in your soul is so rare and pure." },
    { num: 3, title: "Your Adorable Laugh", text: "Hearing you genuinely laugh is without a doubt my favorite sound in this entire world." },
    { num: 4, title: "Your Sparkling Eyes", text: "The way your eyes light up whenever you talk about things you love makes my heart skip a beat." },
    { num: 5, title: "Your Comfort", text: "Just knowing you exist and having you in my life gives me an unexplainable sense of peace." },
    { num: 6, title: "Your Playful Side", text: "Every silly expression and cute pose you make in your photos is completely unforgettable." },
    { num: 7, title: "How You Listen", text: "You make me feel truly understood, heard, and valued in a way no one else ever has." },
    { num: 8, title: "Your Inner Strength", text: "You handle everything in life with so much grace, maturity, and resilience." },
    { num: 9, title: "The Little Moments", text: "Even doing nothing at all feels like the best adventure when I get to do it with you." },
    { num: 10, title: "Your Incomparable Beauty", text: "Inside and out, you are effortlessly the most gorgeous girl I have ever laid eyes on." },
    { num: 11, title: "Your Sweet Voice", text: "A single word from you can calm down all the chaos in my mind." },
    { num: 12, title: "How You Love", text: "The warmth and care you show to the people around you inspires me every single day." },
    { num: 13, title: "Our Inside Jokes", text: "All the shared smiles, secret glances, and memories that belong only to you and me." },
    { num: 14, title: "Your Thoughtful Messages", text: "The sweet texts from you that always catch me grinning like an idiot at my phone." },
    { num: 15, title: "How Proud I Am", text: "Watching you grow into such an extraordinary young woman fills me with so much pride." },
    { num: 16, title: "Your Unconditional Support", text: "You believe in me and push me forward even when I find it hard to believe in myself." },
    { num: 17, title: "Simply Because You're You", text: "You are my dream come true, my best friend, and my whole heart. Happy 17th Birthday! ❤️" }
  ];

  // --- STATE MANAGEMENT ---
  let isMusicPlaying = false;
  let activeAudioTrack = 'musicbox'; // 'musicbox' or 'custom'
  let kissCount = 0;
  let revealedReasons = new Set();
  let currentLightboxList = [];
  let currentLightboxIndex = 0;
  let touchStartX = 0;
  let touchStartY = 0;

  // --- AUDIO SYNTHESIZER (WEB AUDIO API) ---
  let audioCtx = null;
  let synthInterval = null;

  function initAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Play a soft, music-box bell chime
  function playMusicBoxNote(freq, time, duration = 1.2) {
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);

      // Music box overtone for bell chime realism
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 2.01, time);

      // Envelopes
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.18, time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      gain2.gain.setValueAtTime(0, time);
      gain2.gain.linearRampToValueAtTime(0.06, time + 0.01);
      gain2.gain.exponentialRampToValueAtTime(0.0001, time + duration * 0.6);

      osc.connect(gain);
      osc2.connect(gain2);
      gain.connect(audioCtx.destination);
      gain2.connect(audioCtx.destination);

      osc.start(time);
      osc2.start(time);
      osc.stop(time + duration);
      osc2.stop(time + duration * 0.6);
    } catch (e) {
      console.warn('Audio note error:', e);
    }
  }

  // Romantic Polyphonic Acoustic Chords (Canon in D / Love Progression)
  const CHORDS_PROGRESSION = [
    // [Bass, Chord Arpeggio notes...]
    { bass: 130.81, notes: [261.63, 329.63, 392.00, 523.25, 392.00, 329.63] }, // C major
    { bass: 123.47, notes: [246.94, 293.66, 392.00, 493.88, 392.00, 293.66] }, // G/B
    { bass: 110.00, notes: [220.00, 261.63, 329.63, 440.00, 329.63, 261.63] }, // Am
    { bass: 87.31,  notes: [174.61, 261.63, 349.23, 440.00, 349.23, 261.63] }, // F
    { bass: 130.81, notes: [261.63, 329.63, 392.00, 523.25, 392.00, 329.63] }, // C
    { bass: 98.00,  notes: [196.00, 246.94, 293.66, 392.00, 293.66, 246.94] }, // G
    { bass: 87.31,  notes: [174.61, 261.63, 349.23, 523.25, 440.00, 349.23] }, // F major 7
    { bass: 98.00,  notes: [196.00, 293.66, 392.00, 493.88, 392.00, 293.66] }  // G
  ];

  function startMusicBoxMelody() {
    initAudioContext();
    if (!audioCtx) return;

    let chordIdx = 0;
    let arpeggioIdx = 0;

    function scheduleNext() {
      if (!isMusicPlaying || activeAudioTrack !== 'musicbox') return;
      const currentChord = CHORDS_PROGRESSION[chordIdx];
      const now = audioCtx.currentTime;

      // If at start of chord, play soft warm bass
      if (arpeggioIdx === 0) {
        playMusicBoxNote(currentChord.bass, now, 2.2);
      }

      // Play chime arpeggio note
      const noteFreq = currentChord.notes[arpeggioIdx];
      playMusicBoxNote(noteFreq, now, 1.4);

      arpeggioIdx++;
      if (arpeggioIdx >= currentChord.notes.length) {
        arpeggioIdx = 0;
        chordIdx = (chordIdx + 1) % CHORDS_PROGRESSION.length;
      }

      // Smooth romantic tempo (360ms per note)
      synthInterval = setTimeout(scheduleNext, 360);
    }

    scheduleNext();
  }

  function stopMusicBoxMelody() {
    if (synthInterval) {
      clearTimeout(synthInterval);
      synthInterval = null;
    }
  }

  // --- PLAYLIST SYSTEM ---
  const PLAYLIST = [
    {
      title: "💖 Meri Aankhon Mein (Shukran Allah)",
      type: "audio",
      src: "assets/audio/shukran_allah.mp3"
    },
    {
      title: "✨ Tu Chahiye (Atif Aslam)",
      type: "audio",
      src: "assets/audio/tu_chahiye.mp3"
    },
    {
      title: "🎂 Birthday Acoustic Melody",
      type: "audio",
      src: "assets/audio/birthday_melody.mp3"
    },
    {
      title: "🎬 Our Memory Audio",
      type: "audio",
      src: "assets/audio/our_memory.mp3"
    },
    {
      title: "🎶 Romantic Music Box Chime",
      type: "synth"
    }
  ];

  let currentTrackIndex = 0;

  function updatePlaylistUI() {
    const trackName = document.getElementById('track-name');
    const pauseBtn = document.getElementById('pause-resume-btn');
    const playlistBtns = document.querySelectorAll('.playlist-item-btn');
    const current = PLAYLIST[currentTrackIndex];

    if (trackName) trackName.textContent = current.title;
    if (pauseBtn) pauseBtn.textContent = isMusicPlaying ? '⏸️ Pause' : '▶️ Play';

    playlistBtns.forEach((btn, idx) => {
      if (idx === currentTrackIndex) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function playTrack(index) {
    initAudioContext();
    currentTrackIndex = (index + PLAYLIST.length) % PLAYLIST.length;
    const current = PLAYLIST[currentTrackIndex];
    const widget = document.getElementById('music-widget');
    const audioEl = document.getElementById('audio-player');

    isMusicPlaying = true;
    if (widget) widget.classList.add('playing');

    if (current.type === 'audio') {
      stopMusicBoxMelody();
      if (audioEl) {
        audioEl.src = current.src;
        audioEl.play().catch(e => console.warn('Audio play error:', e));
      }
    } else {
      if (audioEl) audioEl.pause();
      startMusicBoxMelody();
    }

    updatePlaylistUI();
  }

  function nextTrack() {
    playTrack(currentTrackIndex + 1);
  }

  function prevTrack() {
    playTrack(currentTrackIndex - 1);
  }

  function toggleMusic() {
    initAudioContext();
    const widget = document.getElementById('music-widget');
    const audioEl = document.getElementById('audio-player');
    const current = PLAYLIST[currentTrackIndex];

    if (isMusicPlaying) {
      // Pause
      isMusicPlaying = false;
      stopMusicBoxMelody();
      if (audioEl) audioEl.pause();
      if (widget) widget.classList.remove('playing');
    } else {
      // Play
      isMusicPlaying = true;
      if (widget) widget.classList.add('playing');

      if (current.type === 'audio') {
        stopMusicBoxMelody();
        if (audioEl) {
          if (!audioEl.src || audioEl.src.indexOf(current.src) === -1) {
            audioEl.src = current.src;
          }
          audioEl.play().catch(e => console.warn('Audio play error:', e));
        }
      } else {
        if (audioEl) audioEl.pause();
        startMusicBoxMelody();
      }
    }

    updatePlaylistUI();
  }

  // --- LIVE AGE & LOVE COUNTER ---
  function initAgeCounter() {
    // Born on: October 10, 2009 00:00:00 (AD) / 2066-06-24 (BS)
    const birthDate = new Date(2009, 9, 10, 0, 0, 0).getTime();

    function updateCounter() {
      const now = new Date().getTime();
      const diff = Math.max(0, now - birthDate);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const dEl = document.getElementById('counter-days');
      const hEl = document.getElementById('counter-hours');
      const mEl = document.getElementById('counter-minutes');
      const sEl = document.getElementById('counter-seconds');

      if (dEl) dEl.textContent = days.toLocaleString();
      if (hEl) hEl.textContent = String(hours).padStart(2, '0');
      if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
      if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
    }

    updateCounter();
    setInterval(updateCounter, 1000);
  }

  // --- CONFETTI CANNON ENGINE ---
  function fireConfetti(originX = 0.5, originY = 0.6) {
    const count = 70;
    const colors = ['#ff4d79', '#ff85a2', '#ffd700', '#fbc4d4', '#ffffff', '#ff9f1a', '#a29bfe'];

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'confetti-particle';
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 8 + 6;
      const angle = Math.random() * 2 * Math.PI;
      const velocity = Math.random() * 300 + 150;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity - 100;

      el.style.cssText = `
        position: fixed;
        left: ${originX * 100}vw;
        top: ${originY * 100}vh;
        width: ${size}px;
        height: ${size * (Math.random() > 0.5 ? 1 : 1.8)}px;
        background-color: ${color};
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        z-index: 10000;
        pointer-events: none;
        transform: translate(0, 0);
        opacity: 1;
        transition: transform 1.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 1.5s ease;
      `;

      document.body.appendChild(el);

      requestAnimationFrame(() => {
        const rot = (Math.random() - 0.5) * 720;
        el.style.transform = `translate(${vx}px, ${vy + 250}px) rotate(${rot}deg)`;
        el.style.opacity = '0';
      });

      setTimeout(() => el.remove(), 1600);
    }
  }

  // --- FLOATING POP EMOJI ---
  function spawnFloatingEmoji(emoji, x, y) {
    const el = document.createElement('div');
    el.className = 'floating-pop-emoji';
    el.textContent = emoji;

    const dx = (Math.random() - 0.5) * 80;
    const dx2 = dx + (Math.random() - 0.5) * 60;

    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.setProperty('--dx', `${dx}px`);
    el.style.setProperty('--dx2', `${dx2}px`);

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1800);
  }

  // --- 1. UNWRAP SURPRISE / CURTAIN LOGIC ---
  function initIntroCurtain() {
    const curtain = document.getElementById('intro-curtain');
    const giftBtn = document.getElementById('gift-box-btn');

    if (!giftBtn || !curtain) return;

    giftBtn.addEventListener('click', () => {
      fireConfetti(0.5, 0.5);

      // Start playing our song immediately
      playTrack(0);

      setTimeout(() => {
        curtain.classList.add('hidden');
      }, 350);
    });
  }

  // --- 3. CAKE CANDLES CEREMONY ---
  function initCakeSection() {
    const cakeContainer = document.getElementById('cake-interactive-btn');
    const blowBtn = document.getElementById('blow-candles-btn');
    const flames = [
      document.getElementById('flame-1'),
      document.getElementById('flame-2'),
      document.getElementById('flame-3')
    ];
    const wishBanner = document.getElementById('wish-banner');

    let candlesBlown = false;

    function blowOutCandles() {
      if (candlesBlown) {
        flames.forEach(f => f && f.classList.remove('blown-out'));
        if (wishBanner) wishBanner.classList.remove('show');
        candlesBlown = false;
        if (blowBtn) blowBtn.innerHTML = '<span>💨 Tap to Blow Out The Candles!</span>';
        return;
      }

      candlesBlown = true;
      flames.forEach(f => f && f.classList.add('blown-out'));

      fireConfetti(0.5, 0.4);
      setTimeout(() => fireConfetti(0.3, 0.4), 250);
      setTimeout(() => fireConfetti(0.7, 0.4), 500);

      if (wishBanner) wishBanner.classList.add('show');
      if (blowBtn) blowBtn.innerHTML = '<span>🕯️ Candles Blown! (Tap to Relight)</span>';
    }

    if (cakeContainer) cakeContainer.addEventListener('click', blowOutCandles);
    if (blowBtn) blowBtn.addEventListener('click', blowOutCandles);
  }

  // --- 4. US SECTION: VIDEO & POLAROID INTERACTION ---
  function initUsSection() {
    const video = document.getElementById('us-featured-video');
    const playBtn = document.getElementById('play-us-video-btn');
    const replayBtn = document.getElementById('us-video-replay-btn');
    const muteBtn = document.getElementById('us-video-mute-btn');
    const fsBtn = document.getElementById('us-video-fullscreen-btn');

    if (video && playBtn) {
      playBtn.addEventListener('click', () => {
        if (video.paused) {
          video.play();
          playBtn.classList.add('playing');
        } else {
          video.pause();
          playBtn.classList.remove('playing');
        }
      });

      video.addEventListener('play', () => playBtn.classList.add('playing'));
      video.addEventListener('pause', () => playBtn.classList.remove('playing'));
      video.addEventListener('ended', () => playBtn.classList.remove('playing'));
    }

    if (replayBtn && video) {
      replayBtn.addEventListener('click', () => {
        video.currentTime = 0;
        video.play();
      });
    }

    if (muteBtn && video) {
      muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        muteBtn.textContent = video.muted ? '🔇 Muted' : '🔊 Sound On';
      });
    }

    if (fsBtn && video) {
      fsBtn.addEventListener('click', () => {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        }
      });
    }

    const polaroidCards = document.querySelectorAll('.polaroid-card[data-type="us-photo"]');
    polaroidCards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        const usList = MEDIA_DATA.us.images.map(item => ({
          type: 'image',
          src: item.src,
          caption: 'Our Memories: Rahul & My Queen ❤️'
        }));
        openLightbox(usList, idx);
      });
    });
  }

  // --- 5. HER SECTION: GALLERY TABS & MASONRY GRID ---
  function initHerGallery() {
    const grid = document.getElementById('her-gallery-grid');
    const tabs = document.querySelectorAll('#gallery-tabs .tab-btn');
    if (!grid) return;

    let currentFilter = 'all';
    const allHerItems = [];

    MEDIA_DATA.hers.images.forEach((item, idx) => {
      allHerItems.push({
        id: `img-${idx}`,
        type: 'image',
        src: item.src,
        thumb: item.thumb,
        caption: `A beautiful moment of my love 💕 (#${idx + 1})`
      });
    });

    MEDIA_DATA.hers.videos.forEach((item, idx) => {
      allHerItems.push({
        id: `vid-${idx}`,
        type: 'video',
        src: item.src,
        poster: item.poster,
        caption: `Cute laughter and clips of her 🎬 (#${idx + 1})`
      });
    });

    function renderGrid(filter) {
      grid.innerHTML = '';
      const itemsToRender = allHerItems.filter(item => {
        if (filter === 'photos') return item.type === 'image';
        if (filter === 'videos') return item.type === 'video';
        return true;
      });

      itemsToRender.forEach((item, index) => {
        const card = document.createElement('article');
        card.className = 'media-card';
        card.dataset.index = index;

        let innerHTML = '';
        if (item.type === 'image') {
          innerHTML = `
            <img 
              src="${item.thumb}" 
              alt="Her memory" 
              loading="lazy" 
              class="card-thumb"
            >
            <div class="card-badge">🌸 Photo</div>
            <button class="card-like-btn" data-id="${item.id}" title="Love this!">
              <span>❤️</span>
              <span class="like-num">0</span>
            </button>
          `;
        } else {
          innerHTML = `
            <img 
              src="${item.poster}" 
              alt="Her video clip" 
              loading="lazy" 
              class="card-thumb"
            >
            <div class="card-badge" style="background: rgba(255, 77, 121, 0.85);">🎬 Reel</div>
            <button class="card-like-btn" data-id="${item.id}" title="Love this!">
              <span>❤️</span>
              <span class="like-num">0</span>
            </button>
          `;
        }

        card.innerHTML = innerHTML;

        card.addEventListener('click', (e) => {
          if (e.target.closest('.card-like-btn')) return;
          openLightbox(itemsToRender, index);
        });

        const likeBtn = card.querySelector('.card-like-btn');
        if (likeBtn) {
          likeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const numEl = likeBtn.querySelector('.like-num');
            let count = parseInt(numEl.textContent, 10) || 0;
            count++;
            numEl.textContent = count;

            const rect = likeBtn.getBoundingClientRect();
            spawnFloatingEmoji('💖', rect.left + rect.width / 2, rect.top);
          });
        }

        grid.appendChild(card);
      });
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentFilter = tab.dataset.filter;
        renderGrid(currentFilter);
      });
    });

    renderGrid('all');
  }

  // --- 6. 17 REASONS WHY I ADORE YOU ---
  function initReasonsSection() {
    const grid = document.getElementById('reasons-grid');
    const progressBar = document.getElementById('reasons-progress');
    const countEl = document.getElementById('revealed-count');
    const allBadge = document.getElementById('all-revealed-badge');
    if (!grid) return;

    grid.innerHTML = '';
    REASONS.forEach(r => {
      const card = document.createElement('div');
      card.className = 'reason-flip-card';
      card.innerHTML = `
        <div class="reason-card-inner">
          <div class="reason-front">
            <div class="reason-number-badge">#${r.num}</div>
            <div class="reason-front-hint">Tap to reveal 💌</div>
          </div>
          <div class="reason-back">
            <div class="reason-heart-stamp">💖</div>
            <div class="reason-text">${r.text}</div>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        if (card.classList.contains('flipped')) {
          revealedReasons.add(r.num);
          const rect = card.getBoundingClientRect();
          spawnFloatingEmoji('✨', rect.left + rect.width / 2, rect.top);
        }

        const count = revealedReasons.size;
        if (countEl) countEl.textContent = count;
        if (progressBar) progressBar.style.width = `${(count / REASONS.length) * 100}%`;

        if (count === REASONS.length && allBadge) {
          allBadge.classList.add('show');
          fireConfetti(0.5, 0.6);
        }
      });

      grid.appendChild(card);
    });
  }

  // --- 7. WAX-SEALED LOVE LETTER ---
  function initLoveLetter() {
    const envelope = document.getElementById('envelope-element');
    const waxSeal = document.getElementById('wax-seal-btn');
    const letter = document.getElementById('letter-paper');

    function openEnvelope() {
      if (envelope) envelope.classList.add('open');
      if (letter) {
        letter.classList.add('open');
        letter.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      fireConfetti(0.5, 0.5);
    }

    if (envelope) envelope.addEventListener('click', openEnvelope);
    if (waxSeal) waxSeal.addEventListener('click', openEnvelope);
  }

  // --- 8. INFINITE KISSES & LOVE CANNON ---
  function initKissCannon() {
    const bigKissBtn = document.getElementById('huge-kiss-btn');
    const quickKissBtn = document.getElementById('quick-kiss-btn');
    const mainKissCount = document.getElementById('main-kiss-count');
    const quickBadge = document.getElementById('kiss-badge');
    const milestoneMsg = document.getElementById('kiss-milestone-msg');

    const kissEmojis = ['💋', '💖', '🥰', '🌸', '✨', '👑', '🌷'];

    function sendKiss(e) {
      kissCount++;
      if (mainKissCount) mainKissCount.textContent = kissCount.toLocaleString();
      if (quickBadge) quickBadge.textContent = kissCount;

      const x = e ? (e.clientX || window.innerWidth / 2) : window.innerWidth / 2;
      const y = e ? (e.clientY || window.innerHeight / 2) : window.innerHeight / 2;

      const randomEmoji = kissEmojis[Math.floor(Math.random() * kissEmojis.length)];
      spawnFloatingEmoji(randomEmoji, x, y);

      if (milestoneMsg) {
        if (kissCount === 10) milestoneMsg.textContent = '10 Kisses sent! Your smile is priceless 🥰';
        else if (kissCount === 25) milestoneMsg.textContent = '25 Kisses! You are Rahul\'s whole world 💖';
        else if (kissCount === 50) milestoneMsg.textContent = '50 Kisses! Overflowing affection for the Queen! 👑';
        else if (kissCount === 100) {
          milestoneMsg.textContent = '100+ Kisses! Infinite love forever and ever! 🎉';
          fireConfetti(0.5, 0.5);
        }
      }
    }

    if (bigKissBtn) bigKissBtn.addEventListener('click', sendKiss);
    if (quickKissBtn) quickKissBtn.addEventListener('click', sendKiss);
  }

  // --- 10. LUXURY LIGHTBOX MODAL ---
  function openLightbox(list, index) {
    currentLightboxList = list;
    currentLightboxIndex = index;

    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    renderLightboxContent();
  }

  function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const video = document.getElementById('lightbox-video');

    if (video) {
      video.pause();
      video.src = '';
    }

    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
  }

  function renderLightboxContent() {
    if (!currentLightboxList.length) return;

    const item = currentLightboxList[currentLightboxIndex];
    const img = document.getElementById('lightbox-img');
    const video = document.getElementById('lightbox-video');
    const counter = document.getElementById('lightbox-counter');
    const caption = document.getElementById('lightbox-caption');

    if (counter) counter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxList.length}`;
    if (caption) caption.textContent = item.caption || 'Special Memory ❤️';

    if (item.type === 'image') {
      if (video) {
        video.pause();
        video.style.display = 'none';
      }
      if (img) {
        img.src = item.src;
        img.style.display = 'block';
      }
    } else {
      if (img) img.style.display = 'none';
      if (video) {
        video.src = item.src;
        video.style.display = 'block';
        video.play().catch(e => console.warn('Video autoplay blocked:', e));
      }
    }
  }

  function nextLightbox() {
    if (!currentLightboxList.length) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxList.length;
    renderLightboxContent();
  }

  function prevLightbox() {
    if (!currentLightboxList.length) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxList.length) % currentLightboxList.length;
    renderLightboxContent();
  }

  function initLightboxEvents() {
    const modal = document.getElementById('lightbox-modal');
    const backdrop = document.getElementById('lightbox-backdrop');
    const closeBtn = document.getElementById('lightbox-close-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const heartBtn = document.getElementById('lightbox-heart-btn');
    const stage = document.getElementById('lightbox-stage');

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (backdrop) backdrop.addEventListener('click', closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', nextLightbox);
    if (prevBtn) prevBtn.addEventListener('click', prevLightbox);

    if (heartBtn) {
      heartBtn.addEventListener('click', () => {
        const badge = document.getElementById('lightbox-heart-count');
        let count = parseInt(badge.textContent, 10) || 0;
        count++;
        badge.textContent = count;
        spawnFloatingEmoji('💖', window.innerWidth / 2, window.innerHeight / 2);
      });
    }

    window.addEventListener('keydown', (e) => {
      if (!modal || !modal.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    });

    if (stage) {
      stage.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      }, { passive: true });

      stage.addEventListener('touchend', (e) => {
        const diffX = e.changedTouches[0].screenX - touchStartX;
        const diffY = e.changedTouches[0].screenY - touchStartY;

        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
          if (diffX < 0) {
            nextLightbox();
          } else {
            prevLightbox();
          }
        }
      }, { passive: true });
    }
  }

  // --- AMBIENT CANVAS BACKGROUND (Sparkles & Hearts) ---
  function initAmbientCanvas() {
    const canvas = document.getElementById('ambient-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = 28;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 4 + 2,
        speedY: Math.random() * 0.6 + 0.2,
        speedX: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.2,
        type: Math.random() > 0.4 ? 'sparkle' : 'heart'
      });
    }

    function drawHeart(x, y, size, opacity) {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = `rgba(255, 133, 162, ${opacity})`;
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(0, topCurveHeight);
      ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
      ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, (size + topCurveHeight) / 2 + size * 0.2, 0, size * 1.2);
      ctx.bezierCurveTo(0, (size + topCurveHeight) / 2 + size * 0.2, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
      ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    function drawSparkle(x, y, size, opacity) {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = `rgba(255, 220, 150, ${opacity})`;
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.6, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < -20) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        if (p.type === 'heart') {
          drawHeart(p.x, p.y, p.size * 1.5, p.opacity);
        } else {
          drawSparkle(p.x, p.y, p.size, p.opacity);
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('click', (e) => {
      if (Math.random() > 0.3) {
        spawnFloatingEmoji('✨', e.clientX, e.clientY);
      }
    });
  }

  // --- SCROLL TO TOP & QUICK CONTROLS ---
  function initScrollControls() {
    const scrollBtn = document.getElementById('scroll-top-btn');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const musicToggle = document.getElementById('music-toggle');
    const switchTrackBtn = document.getElementById('switch-track-btn');
    const pickAudioBtn = document.getElementById('pick-audio-btn');
    const localAudioInput = document.getElementById('local-audio-input');
    const muteBtn = document.getElementById('mute-btn');
    const trackName = document.getElementById('track-name');
    const audioEl = document.getElementById('audio-player');
    const widget = document.getElementById('music-widget');

    const prevBtn = document.getElementById('prev-track-btn');
    const nextBtn = document.getElementById('next-track-btn');
    const pauseBtn = document.getElementById('pause-resume-btn');
    const playlistBtns = document.querySelectorAll('.playlist-item-btn');

    if (musicToggle) musicToggle.addEventListener('click', toggleMusic);
    if (pauseBtn) pauseBtn.addEventListener('click', toggleMusic);
    if (prevBtn) prevBtn.addEventListener('click', prevTrack);
    if (nextBtn) nextBtn.addEventListener('click', nextTrack);

    if (muteBtn) {
      muteBtn.addEventListener('click', () => {
        toggleMusic();
        muteBtn.textContent = isMusicPlaying ? '🔊' : '🔇';
      });
    }

    // Playlist item clicks
    playlistBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        playTrack(idx);
      });
    });

    // Auto advance to next song when current track ends
    if (audioEl) {
      audioEl.addEventListener('ended', () => {
        nextTrack();
      });
    }

    // Allow user to pick any custom audio file from device
    if (pickAudioBtn && localAudioInput) {
      pickAudioBtn.addEventListener('click', () => localAudioInput.click());
      localAudioInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
          const url = URL.createObjectURL(file);
          stopMusicBoxMelody();
          const cleanName = file.name.replace(/\.[^/.]+$/, '').slice(0, 24);
          if (trackName) trackName.textContent = `🎵 ${cleanName}`;
          if (audioEl) {
            audioEl.src = url;
            audioEl.play().catch(err => console.warn('Play error:', err));
          }
          isMusicPlaying = true;
          if (widget) widget.classList.add('playing');
          if (pauseBtn) pauseBtn.textContent = '⏸️ Pause';
        }
      });
    }

    // Initialize UI
    updatePlaylistUI();
  }

  // --- INITIALIZE EVERYTHING ON DOM READY ---
  document.addEventListener('DOMContentLoaded', () => {
    initIntroCurtain();
    initAgeCounter();
    initCakeSection();
    initUsSection();
    initHerGallery();
    initReasonsSection();
    initLoveLetter();
    initKissCannon();
    initLightboxEvents();
    initAmbientCanvas();
    initScrollControls();
  });
})();
