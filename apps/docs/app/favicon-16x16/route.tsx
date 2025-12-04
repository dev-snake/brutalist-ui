import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// 16x16 favicon - matches favicon.svg design
export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    position: 'relative',
                    background: 'transparent',
                }}
            >
                {/* Shadow layer 3 (back) - Red */}
                <div
                    style={{
                        position: 'absolute',
                        top: 4,
                        left: 4,
                        width: 11,
                        height: 11,
                        background: '#FF6B6B',
                        border: '1px solid black',
                    }}
                />
                {/* Shadow layer 2 - Teal */}
                <div
                    style={{
                        position: 'absolute',
                        top: 2,
                        left: 2,
                        width: 11,
                        height: 11,
                        background: '#4ECDC4',
                        border: '1px solid black',
                    }}
                />
                {/* Main block - Yellow */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 11,
                        height: 11,
                        background: '#FFE66D',
                        border: '1px solid black',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <span
                        style={{
                            color: 'black',
                            fontSize: 5,
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
            width: 16,
            height: 16,
        }
    );
}
