import React from 'react'
import { FileSliders, Mail } from 'lucide-react'
import MotionDivDownToUp from '../../animation/MotionDivDownToUp'
import content from '../../../content/content'

function EmailFooter({
  emailTwo = true,
  emailThree = false,
  emailFour = false,
  emailFive = false,
}) {
  return (
    <>
      {/* <MotionDivDownToUp>
        <div className="flex full gap-x-[12px] items-center opacity-90">
          <span>
            <Mail />
          </span>

          <p className="text-paragraph3">{content.texts.infos.email}</p>
        </div>
      </MotionDivDownToUp> */}

      {emailTwo && (
        <a
          href="mailto:neto.gonzaga@hotmail.com"
          aria-label="Abre diretamente no email"
        >
          {' '}
          <MotionDivDownToUp>
            <div className="flex full gap-x-[12px] items-center opacity-90">
              <Mail />

              <p className="text-paragraph3">
                {content.texts.infos.emailSecundario}{' '}
              </p>
            </div>
          </MotionDivDownToUp>
        </a>
      )}

      {emailThree && (
        <MotionDivDownToUp>
          <div className="flex full gap-x-[12px] items-center opacity-90">
            <Mail />

            <p className="text-paragraph3">{content.texts.infos.emailThree}</p>
          </div>
        </MotionDivDownToUp>
      )}

      {emailFour && (
        <MotionDivDownToUp>
          <div className="flex full gap-x-[12px] items-center opacity-90">
            <Mail />

            <p className="text-paragraph3">{content.texts.infos.emailFour}</p>
          </div>
        </MotionDivDownToUp>
      )}

      {emailFive && (
        <MotionDivDownToUp>
          <div className="flex full gap-x-[12px] items-center opacity-90">
            <Mail />

            <p className="text-paragraph3">{content.texts.infos.emailFive}</p>
          </div>
        </MotionDivDownToUp>
      )}
    </>
  )
}

export default EmailFooter
