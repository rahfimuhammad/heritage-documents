import LoadingOutlined from '@ant-design/icons/LoadingOutlined'
import React from 'react'

const Loading = ({ height }) => {
    return (
        <div
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: height,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <LoadingOutlined 
                style={{
                    fontSize: '30px',
                }}
            />
        </div>
    )
}

export default Loading