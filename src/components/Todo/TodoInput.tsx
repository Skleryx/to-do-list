interface Props {
  value: string;
  onChange: (v: string) => void;
  onAdd: () => void;
}

export default function TodoInput({ value, onChange, onAdd }: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd();
      }}
      className="flex flex-row
            gap-2 sm:gap-3
            bg-slate-900
            p-3 sm:p-4
            rounded-xl
            shadow-lg
            dark:bg-slate-800"
    >
      <input
        className="flex-1
              bg-slate-800
              rounded-lg
              text-white
              px-3 sm:px-4
              py-2 sm:py-3
              text-sm sm:text-base
              outline-none
              focus:ring-2 focus:ring-blue-500
              dark:bg-slate-700"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Tambah todo..."
      />
      <button className="bg-blue-600
              hover:bg-blue-700
              text-white
              px-4 sm:px-5
              rounded-lg
              text-lg
              dark:bg-blue-500 dark:hover:bg-blue-600">
        +
      </button>
    </form>
  );
}
