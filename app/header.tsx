export default function Header({ bigMobile }: { bigMobile: boolean }) {
  return (
    <div
      className={
        `w-full p-2` + bigMobile ? `flex flex-col md:flex-row` : `flex-row`
      }
    >
      <div className="flex flex-row items-center">
        <img src="will-it-table-logo.png" className="w-16 md:w-24" />
        <h1 className="pl-8 text-2xl md:text-4xl">Will It Table?</h1>
      </div>
      {/* search bar */}
    </div>
  );
}
