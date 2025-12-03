import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
    width: 180,
    height: 180,
};

export const contentType = 'image/png';

export default function AppleIcon() {
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
                    border: '6px solid black',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 8,
                        left: 8,
                        width: 156,
                        height: 156,
                        background: '#4ECDC4',
                        border: '6px solid black',
                        zIndex: -1,
                    }}
                />
                <span style={{ color: 'black', fontSize: 72, fontWeight: 900 }}>BU</span>
            </div>
        ),
        {
            ...size,
        }
    );
}
