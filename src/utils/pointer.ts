const pointer1 = `https://andspark.oss-cn-hangzhou.aliyuncs.com/cursor1.png`
const pointer2 = `https://andspark.oss-cn-hangzhou.aliyuncs.com/cursor2.png`

const addPointer = (querySelectors?: string[]) => {
	const styleEl = document.createElement('style')
	styleEl.innerHTML = style;
	document.body.appendChild(styleEl)
	const btn = document.getElementsByTagName('button')
	const a = document.getElementsByTagName('a')
	let others = [];
	if (querySelectors) {
		others = querySelectors.reduce((p, c) => {
			let els = document.querySelectorAll(c)
			p.push(...els)
			return p
		},[] as any[])
	}
	const nodeList = [...a, ...btn,...others,document.body]
	nodeList.forEach(node => {
		addNodePointer(node)
	})

}

const addNodePointer = (node:HTMLElement)=> {
	node.style.cursor = `url(${pointer1}),auto`
	node.addEventListener('mousedown', (e) => {
		if (e.which == 2) {
			e.preventDefault()
		}
		node.style.cursor = `url(${pointer2}),auto`
	})
	node.addEventListener('mouseup', (e) => {
		node.style.cursor = `url(${pointer1}),auto`
	})
}

const style = `
	body {
		cursor: url(${pointer1}), auto;
	}

  button,
  a {
    cursor: url(${pointer1}), auto;
  }
}
`

export default addPointer