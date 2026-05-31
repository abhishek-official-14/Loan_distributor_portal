import styles from './styles.module.css';
export default function Input({ label, icon: Icon, error, ...props }) { return <label className={styles.field}><span>{label}</span><div className={`${styles.wrap} ${error ? styles.invalid : ''}`}>{Icon && <Icon size={17}/>}<input {...props}/></div>{error && <small>{error}</small>}</label>; }
