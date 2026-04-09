import { t } from '../../i18n/messages';
import type { ProfileData } from '../../types/profile';
import { maskContact } from '../../utils/mask';

type Props = {
  data: ProfileData;
};

export default function BadgeBoardTemplate({ data }: Props) {
  const tx = (key: Parameters<typeof t>[1]) => t(data.locale, key);

  const display = (value: string | undefined): string | undefined => {
    if (!value) {
      return undefined;
    }
    return data.privacy.maskContact ? maskContact(value) : value;
  };

  const badges = [...data.tags, ...data.hobbies].slice(0, 10);

  return (
    <article className="card card-badge" style={{ borderRadius: data.theme.borderRadius }}>
      <header className="card-head">
        <img
          className="avatar"
          src={data.avatarUrl || 'https://placehold.co/160x160?text=Avatar'}
          alt="avatar"
          referrerPolicy="no-referrer"
        />
        <div>
          <h1>{data.nickname || tx('untitled')}</h1>
          <p>{[data.region, data.mbti].filter(Boolean).join(' · ') || tx('emptyBasicInfo')}</p>
        </div>
      </header>

      <section>
        <h3>{tx('tagSection')}</h3>
        <div className="tag-wrap">
          {badges.map((item, idx) => (
            <span key={`${item}-${idx}`} className="chip" style={{ backgroundColor: `${data.theme.primaryColor}33` }}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h3>{tx('aboutSection')}</h3>
        <p>{data.about}</p>
      </section>

      <section>
        <h3>{tx('wantsSection')}</h3>
        <p>{data.wantsToMeet}</p>
      </section>

      <footer className="contact-line">
        {display(data.contact.qq) && <span>{tx('qq')}: {display(data.contact.qq)}</span>}
        {display(data.contact.wechat) && <span>{tx('wechat')}: {display(data.contact.wechat)}</span>}
        {display(data.contact.x) && <span>{tx('x')}: {display(data.contact.x)}</span>}
      </footer>
    </article>
  );
}
