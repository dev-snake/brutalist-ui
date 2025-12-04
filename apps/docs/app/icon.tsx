import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
    width: 32,
    height: 32,
};

export const contentType = 'image/png';

// Main icon - matches favicon.svg 3-layer shadow design
export default function Icon() {
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
                        top: 7,
                        left: 7,
                        width: 22,
                        height: 22,
                        background: '#FF6B6B',
                        border: '1.5px solid black',
                    }}
                />
                {/* Shadow layer 2 - Teal */}
                <div
                    style={{
                        position: 'absolute',
                        top: 4.5,
                        left: 4.5,
                        width: 22,
                        height: 22,
                        background: '#4ECDC4',
                        border: '1.5px solid black',
                    }}
                />
                {/* Main block - Yellow */}
                <div
                    style={{
                        position: 'absolute',
                        top: 2,
                        left: 2,
                        width: 22,
                        height: 22,
                        background: '#FFE66D',
                        border: '1.5px solid black',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <span
                        style={{
                            color: 'black',
                            fontSize: 10,
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
