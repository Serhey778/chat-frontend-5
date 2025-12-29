import { JSX } from 'react';
import { ImageUI } from 'shared/ui/image';
import { getLastSeenLabel } from '../../../../../../libs';
import { HeaderTopButtonsBlock } from '../header-top-buttons-block/header-top-buttons-block';
import styles from './header-top.module.scss';
import { HeaderTopProps } from './header-top.props';
import CallIcon from './icons/call-icon.svg';
import SearchIcon from './icons/search-icon.svg';

export const HeaderTop = ({ avatarHref, username, lastname, was_online_at }: HeaderTopProps): JSX.Element => {
  const status = getLastSeenLabel(was_online_at);

  return (
    <div className={styles.wrapper}>
      <div className={styles.contactWrapper}>
        <ImageUI src={avatarHref} alt={username} width={40} height={40} className={styles.image} />
        <div className={styles.info}>
          <span className={styles.name}>{username + ' ' + lastname}</span>
          <span className={styles.status}>{status}</span>
        </div>
        <div className={styles.icon}>
          <button>
            <SearchIcon />
          </button>
        </div>
        <div className={styles.icon}>
          <button>
            <CallIcon />
          </button>
        </div>
      </div>
      <HeaderTopButtonsBlock />
    </div>
  );
};
