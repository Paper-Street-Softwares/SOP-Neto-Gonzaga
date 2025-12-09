import React from 'react'
import MotionDivDownToUp from '../../animation/MotionDivDownToUp'
import { CalendarCheck2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import content from '../../../content/content'

function ExpedienteFooter({ showSecond = false }) {
  const { t } = useTranslation() // função para buscar do pt.json

  return (
    <>
      {/* Expediente principal */}
      <a
        href={content.texts.links.ctaWhatsapp}
        target="_blank"
        aria-label="Link para WhatsApp"
      >
        <MotionDivDownToUp>
          <div className="flex full gap-x-[12px] items-center opacity-90">
            <div>
              <CalendarCheck2 />
            </div>

            {/* Interpreta tags HTML do JSON */}
            <p
              dangerouslySetInnerHTML={{
                __html: t('infos.expediente'),
              }}
            />
          </div>
        </MotionDivDownToUp>
      </a>
      {showSecond && (
        <MotionDivDownToUp>
          <div className="flex full gap-x-[12px] items-center opacity-90">
            <div>
              <CalendarCheck2 />
            </div>

            {/* Interpreta tags HTML do JSON */}
            <p
              dangerouslySetInnerHTML={{
                __html: t('infos.expedienteSecundario'),
              }}
            />
          </div>
        </MotionDivDownToUp>
      )}
    </>
  )
}

export default ExpedienteFooter
