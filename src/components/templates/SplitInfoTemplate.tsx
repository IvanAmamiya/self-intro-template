import type { ProfileData } from '../../types/profile';
import { t } from '../../i18n/messages';
import { maskContact } from '../../utils/mask';

type Props = {
  data: ProfileData;
};

export default function SplitInfoTemplate({ data }: Props) {
  const tx = (key: Parameters<typeof t>[1]) => t(data.locale, key);

  const display = (value: string | undefined): string | undefined => {
    if (!value) {
      return undefined;
    }
    return data.privacy.maskContact ? maskContact(value) : value;
  };

  return (
    <article className="card card-split" style={{ borderRadius: data.theme.borderRadius }}>
      <aside className="split-left">
        <img
          className="avatar"
          src={data.avatarUrl || 'https://placehold.co/160x160?text=Avatar'}
          alt="avatar"
          referrerPolicy="no-referrer"
        />
        <h1>{data.nickname || tx('untitled')}</h1>
        <div className="tag-wrap">
          {data.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="chip" style={{ backgroundColor: `${data.theme.primaryColor}33` }}>
              #{tag}
            </span>
          ))}
        </div>
      </aside>

      <section className="split-right">
        <h3>{tx('aboutSection')}</h3>
        <p>{data.about}</p>

        <h3>{tx('fandomSection')}</h3>
        <p>{data.fandoms.join(' / ') || tx('notFilled')}</p>

        <h3>{tx('oshiSection')}</h3>
        <p>{data.oshi.join(' / ') || tx('notFilled')}</p>

        <h3>{tx('wantsSection')}</h3>
        <p>{data.wantsToMeet}</p>

        <h3>{tx('boundariesSection')}</h3>
        <p>{data.boundaries}</p>

        <h3>{tx('contactSection')}</h3>
        <p>
          {[
            display(data.contact.qq) && `${tx('qq')}: ${display(data.contact.qq)}`,
            display(data.contact.wechat) && `${tx('wechat')}: ${display(data.contact.wechat)}`,
            display(data.contact.x) && `${tx('x')}: ${display(data.contact.x)}`,
            display(data.contact.weibo) && `${tx('weibo')}: ${display(data.contact.weibo)}`,
          ]
            .filter(Boolean)
            .join(' ｜ ') || tx('notFilled')}
        </p>
      </section>
    </article>
  );
}
