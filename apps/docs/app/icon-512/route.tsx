import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Route segment config
export const dynamic = 'force-static';

// 512x512 icon for PWA - matches favicon.svg design
export const size = {
    width: 512,
    height: 512,
};

export const contentType = 'image/png';

export default function Icon512() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    position: 'relative',
                    background: '#FFFBF5',
                }}
            >
                {/* Shadow layer 3 (back) - Red */}
                <div
                    style={{
                        position: 'absolute',
                        top: 112,
                        left: 112,
                        width: 352,
                        height: 352,
                        background: '#FF6B6B',
                        border: '12px solid black',
                    }}
                />
                {/* Shadow layer 2 - Teal */}
                <div
                    style={{
                        position: 'absolute',
                        top: 72,
                        left: 72,
                        width: 352,
                        height: 352,
                        background: '#4ECDC4',
                        border: '12px solid black',
                    }}
                />
                {/* Main block - Yellow */}
                <div
                    style={{
                        position: 'absolute',
                        top: 32,
                        left: 32,
                        width: 352,
                        height: 352,
                        background: '#FFE66D',
                        border: '12px solid black',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <span
                        style={{
                            color: 'black',
                            fontSize: 160,
                            fontWeight: 900,
                            fontFamily: 'Arial Black, sans-serif',
                        }}
                    >
                        BU
                    </span>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
