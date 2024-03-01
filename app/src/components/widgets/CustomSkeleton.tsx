type CustomBlockSkeletonProps = {
    height: number
    width?: number | 'auto'
}

export const CustomBlockSkeleton = ({height, width = 'auto'}: CustomBlockSkeletonProps)=> {
    return (
        <div className={`rounded animate-pulse bg-[var(--gray-a3)]`} style={{width, height}}></div>
    )
}

type CustomCircleSkeletonProps = {
    width?: number
}

export const CustomCircleSkeleton = ({width = 50}: CustomCircleSkeletonProps)=> {
    return (
        <div className={`rounded-full animate-pulse aspect-square bg-[var(--gray-a3)]`} style={{width: width}}></div>
    )
}