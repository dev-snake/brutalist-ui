import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
    width: 32,
    height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    background: '#FFE66D',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontFamily: 'Arial Black, sans-serif',
                    border: '2px solid black',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 2,
                        left: 2,
                        width: 28,
                        height: 28,
                        background: '#4ECDC4',
                        border: '2px solid black',
                        zIndex: -1,
                    }}
                />
                <span style={{ color: 'black', fontSize: 14, fontWeight: 900 }}>BU</span>
            </div>
        ),
        {
            ...size,
        }
    );
}
