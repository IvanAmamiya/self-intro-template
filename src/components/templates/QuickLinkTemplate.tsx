import { t } from '../../i18n/messages';
import type { ProfileData } from '../../types/profile';
import { maskContact } from '../../utils/mask';

type Props = {
  data: ProfileData;
};

export default function QuickLinkTemplate({ data }: Props) {
  const tx = (key: Parameters<typeof t>[1]) => t(data.locale, key);

  const display = (value: string | undefined): string | undefined => {
    if (!value) {
      return undefined;
    }
    return data.privacy.maskContact ? maskContact(value) : value;
  };

  return (
    <article className="card card-quicklink" style={{ borderRadius: data.theme.borderRadius }}>
      <header className="card-head">
        <img
          className="avatar"
          src={data.avatarUrl || 'https://placehold.co/160x160?text=Avatar'}
          alt="avatar"
          referrerPolicy="no-referrer"
        />
        <div>
          <h1>{data.nickname || tx('untitled')}</h1>
          <p>{data.about || tx('notFilled')}</p>
        </div>
      </header>

      <section>
        <h3>{tx('contactSection')}</h3>
        <div className="tag-wrap">
          {display(data.contact.qq) && <span className="chip">{tx('qq')}: {display(data.contact.qq)}</span>}
          {display(data.contact.wechat) && <span className="chip">{tx('wechat')}: {display(data.contact.wechat)}</span>}
          {display(data.contact.x) && <span className="chip">{tx('x')}: {display(data.contact.x)}</span>}
          {display(data.contact.weibo) && <span className="chip">{tx('weibo')}: {display(data.contact.weibo)}</span>}
        </div>
      </section>

      <section>
        <h3>{tx('wantsSection')}</h3>
        <p>{data.wantsToMeet || tx('notFilled')}</p>
      </section>
    </article>
  );
}
