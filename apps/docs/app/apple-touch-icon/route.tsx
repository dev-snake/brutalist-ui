import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// 180x180 Apple Touch Icon - matches favicon.svg design
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
                        top: 40,
                        left: 40,
                        width: 124,
                        height: 124,
                        background: '#FF6B6B',
                        border: '4px solid black',
                    }}
                />
                {/* Shadow layer 2 - Teal */}
                <div
                    style={{
                        position: 'absolute',
                        top: 26,
                        left: 26,
                        width: 124,
                        height: 124,
                        background: '#4ECDC4',
                        border: '4px solid black',
                    }}
                />
                {/* Main block - Yellow */}
                <div
                    style={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        width: 124,
                        height: 124,
                        background: '#FFE66D',
                        border: '4px solid black',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <span
                        style={{
                            color: 'black',
                            fontSize: 56,
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
            width: 180,
            height: 180,
        }
    );
}
