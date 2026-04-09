import type { ProfileData } from '../types/profile';

export const defaultProfile: ProfileData = {
  locale: 'zh-CN',
  nickname: '你的昵称',
  avatarUrl: '',
  gender: '',
  region: '',
  mbti: '',
  about: '这里写一句你的自我介绍，比如：慢热但很好聊，想找同坑朋友一起玩。',
  tags: ['同担友好', '扩列', '二次元'],
  fandoms: ['Project SEKAI', 'BanG Dream!'],
  oshi: ['星乃一歌'],
  hobbies: ['音游', '追番', '画画'],
  wantsToMeet: '想扩同坑、同城或者能一起打音游的小伙伴。',
  boundaries: '不聊现实敏感话题，私聊请先打招呼。',
  contact: {
    qq: '',
    wechat: '',
    x: '',
    weibo: '',
    bilibiliUid: '',
  },
  theme: {
    primaryColor: '#ff77aa',
    backgroundUrl: '',
    fontScale: 1,
    borderRadius: 20,
    mode: 'pastel',
  },
  privacy: {
    maskContact: true,
  },
  template: 'tag-card',
  ratio: '9:16',
};
