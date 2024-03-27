import styles from "./ProgressBar.module.css";
type Props = {
  value: number | string;
  max: number | string | undefined;
  onChange: (value: any) => void;
};

export default function ProgressBar({ value, max, onChange }: Props) {
  const handleChange = (e: any) => {
    const newValue = e.target.value
    onChange(newValue)
  }
  return (
    <input
      className={styles.styledProgressInput}
      type="range"
      min="0"
      value={value}
      max={max}
      onChange={handleChange}
      step={0.01}
    />
  );
}