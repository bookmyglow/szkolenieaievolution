const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-20 w-[720px] h-[720px] bg-gradient-to-br from-sky-400/20 via-purple-400/15 to-cyan-300/20 blur-3xl animate-float-slow" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[620px] h-[620px] bg-gradient-to-br from-purple-500/18 via-blue-500/16 to-cyan-400/18 blur-3xl animate-float" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-gradient-to-br from-white/20 via-cyan-200/20 to-purple-200/20 blur-3xl animate-float-delayed" />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(14, 165, 233, 0.25) 1px, transparent 1px)` ,
          backgroundSize: '70px 70px'
        }}
      />

      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/30 animate-float-particle"
          style={{
            left: `${8 + i * 9}%`,
            top: `${12 + (i % 4) * 20}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${5 + i * 0.3}s`
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60 dark:from-slate-950/60 dark:via-slate-950/20 dark:to-slate-950/70" />
    </div>
  );
};

export default AnimatedBackground;
