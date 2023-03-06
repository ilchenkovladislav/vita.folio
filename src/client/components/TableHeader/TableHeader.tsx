import { useState } from 'react';

import { FaArrowsAlt } from 'react-icons/fa';

import { SortingMenu } from '../ui/SortingMenu/SortingMenu';

import styles from './TableHeader.module.scss';

type TableHeaderProps = {
  onChangeSearch: (searchString: string) => void;
};

export const TableHeader: React.FC<TableHeaderProps> = ({ onChangeSearch }) => {
  const [searchString, setSearchString] = useState('');

  function inputHandler(e: React.FormEvent<HTMLInputElement>) {
    setSearchString(e.currentTarget.value);
    onChangeSearch(e.currentTarget.value);
  }

  return (
    <div className={styles.header}>
      <FaArrowsAlt />
      <input
        className={styles.search}
        type="search"
        placeholder="название проекта"
        onChange={inputHandler}
        value={searchString}
      />
      <p>дата съемки</p>
      <p>ссылка на диск</p>

      <SortingMenu />
    </div>
  );
};
