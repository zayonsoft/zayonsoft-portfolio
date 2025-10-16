export default function FancyUnderline() {
  return (
    <section>
      <div className="grid grid-cols-[1fr] relative items-center">
        <div>
          <p className="absolute left-[-5px]  -translate-y-1/2 top-1/2 rotate-[45deg] bg-[#12F7D6] w-2 h-2"></p>
        </div>
        <div>
          <hr className="block bg-[#12F7D6] outline-none border-none h-0.5 w-full" />
        </div>
        <div>
          <p className="absolute right-[-5px]  -translate-y-1/2 top-1/2 rotate-[45deg] bg-[#12F7D6] w-2 h-2"></p>
        </div>
      </div>
    </section>
  );
}
