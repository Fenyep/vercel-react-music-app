function Timer({current, durationVar}) {
    return(<div className="timer">
    <span ref={current} className="current"></span>
    <span ref={durationVar} className="duration"></span>
</div>)
}

export default Timer;