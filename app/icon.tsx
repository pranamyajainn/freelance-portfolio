import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 20,
                    background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)', // Indigo to Cyan
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '8px', // Rounded corners (almost circle but squarish for favicons)
                    fontWeight: 800,
                    fontFamily: 'sans-serif',
                }}
            >
                P
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
