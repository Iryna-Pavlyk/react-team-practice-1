import style from './Statistics.module.css';

export const StatisticsItem = ({ data: { title, total }, icon: Icon }) => {
  return (
    <>
      <Icon size={80} />
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};
