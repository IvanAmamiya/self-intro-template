import { t } from '../../i18n/messages';
import type { ProfileData } from '../../types/profile';

type Props = {
  data: ProfileData;
};

export default function MinimalBioTemplate({ data }: Props) {
  const tx = (key: Parameters<typeof t>[1]) => t(data.locale, key);

  return (
    <article className="card card-minimal" style={{ borderRadius: data.theme.borderRadius }}>
      <h1>{data.nickname || tx('untitled')}</h1>
      <p className="minimal-sub">{[data.gender, data.region, data.mbti].filter(Boolean).join(' · ') || tx('emptyBasicInfo')}</p>

      <section>
        <h3>{tx('fandomOshiSection')}</h3>
        <p>{[...data.fandoms, ...data.oshi].join(' / ') || tx('notFilled')}</p>
      </section>

      <section>
        <h3>{tx('aboutSection')}</h3>
        <p>{data.about}</p>
      </section>

      <section>
        <h3>{tx('boundariesSection')}</h3>
        <p>{data.boundaries || tx('notFilled')}</p>
      </section>
    </article>
  );
}
