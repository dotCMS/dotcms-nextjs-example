import React, { useState } from 'react'
import DotCMSImage from '../../../Image'

export const DotThumbnail = (contentlet) => {
  const [loadImage, setLoadImage] = useState(isImage(contentlet))
  const icon = getIcon(contentlet)

  return (
    <>
      {loadImage ? (
        <DotCMSImage
          alt={contentlet.titleImage}
          onError={() => setLoadImage(false)}
          path={getImageURL(contentlet)}
        />
      ) : (
        <span className="material-icons-outlined text-7xl">
          {icon || 'insert_drive_file'}
        </span>
      )}
    </>
  )
}

const isImage = ({ hasTitleImage, mimeType }): boolean => {
  return hasTitleImage || mimeType === 'application/pdf'
}

const getImageURL = (contentlet): string => {
  return contentlet.mimeType === 'application/pdf'
    ? `/contentAsset/image/${contentlet.inode}/${contentlet.titleImage}/pdf_page/1/resize_w/250/quality_q/45`
    : `/dA/${contentlet.inode}/500w/20q`
}

const getIcon = ({ baseType, contentTypeIcon, __icon__ }) => {
  return baseType !== 'FILEASSET' ? contentTypeIcon : __icon__
}
