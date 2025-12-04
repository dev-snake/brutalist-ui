import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// 192x192 icon for PWA - matches favicon.svg design
export async function GET() {
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
                        top: 42,
                        left: 42,
                        width: 132,
                        height: 132,
                        background: '#FF6B6B',
                        border: '5px solid black',
                    }}
                />
                {/* Shadow layer 2 - Teal */}
                <div
                    style={{
                        position: 'absolute',
                        top: 27,
                        left: 27,
                        width: 132,
                        height: 132,
                        background: '#4ECDC4',
                        border: '5px solid black',
                    }}
                />
                {/* Main block - Yellow */}
                <div
                    style={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        width: 132,
                        height: 132,
                        background: '#FFE66D',
                        border: '5px solid black',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <span
                        style={{
                            color: 'black',
                            fontSize: 60,
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
            width: 192,
            height: 192,
        }
    );
}
