import React from 'react'
import Empty from '../assets/nodata.svg'
import { IsMediumScreen } from '../libs/detectScreen'

const NoData = ({ height }) => {

    const isMedium = IsMediumScreen()

    return (
        <div
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                minHeight: height,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                }}
            >
                <img
                    src={Empty}
                    alt="empty"
                    style={{
                        width: isMedium? '250px' : '320px'
                    }}
                />
                <p
                    style={{
                        fontSize: isMedium? '14px' : '18px',
                        fontWeight: 'bold',
                        color: '#4f4c5b'
                    }}
                >
                    It's empty here
                </p>
            </div>
        </div>
    )
}

export default NoData