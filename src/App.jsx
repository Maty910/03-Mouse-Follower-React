import { useEffect, useState } from "react"

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] =useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('effect ', { enabled })
    
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x:clientX, y:clientY})
    }

    if (enabled) {
    window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove' , handleMove)
    }
  }, [enabled])

  return (
    <>
      <div style={{
          position: 'absolute',
          backgroundColor: 'blue',
          border: '1px solid white',
          borderRadius: '20%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -22,
          top: 0,
          width: 50,
          height: 20,
          transform: `translate(${position.x}px, ${position.y}px)`}}
        />
        <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Desactivar' : 'Activar'} seguir mouse
        </button>
    </>
  )
}

function App () {
  const [mounted, setMounted] = useState(true)

  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        Activar componente FollowMouse
      </button>
    </main>
  )
}

export default App
