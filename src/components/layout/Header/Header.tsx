import React from 'react'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header__wrap">
                    <div className="header__name">
                        Новостной тест
                    </div>
                    <div className="header__contact">
                        <div className="header__address">
                            Москва, ул. Пушкина, д. Колотушкина
                        </div>
                        <div className="header__phone">
                            <a href="tel:+79998851265" className="header__link-phone">+7 999 885 12 65</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;