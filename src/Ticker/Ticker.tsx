import Marquee from 'react-fast-marquee';

import c from './Ticker.module.scss';

export const Ticker = () => (
    <div className={c.container}>
        <section className={c.ticker}>
            <Marquee speed={119} gradient={false}>
                <span className={c.text}>присоединяйся к нашему эко-движению!</span>
                <span className={c.text}>присоединяйся к нашему эко-движению!</span>
                <span className={c.text}>присоединяйся к нашему эко-движению!</span>
            </Marquee>
        </section>
    </div>
);
